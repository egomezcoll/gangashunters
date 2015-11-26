(function(){
  'use strict';

  angular
  .module('mdr.file', [])
  .controller('FileCtrl', ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {

    // OPTIONS
    $scope.text = 'Drag or click here';
    $scope.count = {
      send: 0,
      complete: 0,
      invalid: 0
    };



    /**  Drag and Drop
    |- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    $element.bind('dragenter', function (e){
      e.stopPropagation();
      e.preventDefault();
      var parent = $(e.target).parent();
      parent.addClass('mdr-file-dad-text-hover');
    });

    $element.bind('dragleave', function (e){
      e.stopPropagation();
      e.preventDefault();
      var parent = $(e.target).parent();
      parent.removeClass('mdr-file-dad-text-hover');
    });

    $element.bind('dragover', function (e){
      e.stopPropagation();
      e.preventDefault();
    });

    $element.bind('drop', function (e){
      e.stopPropagation();
      e.preventDefault();

      var parent = $(e.target).parent();
      parent.removeClass('mdr-file-dad-text-hover');
      // Se obtienen los archivos
      var files = e.originalEvent.dataTransfer.files;
      // Se envian los archivos
      uploadFiles(files);
    });

    $scope.clearContent = function()
    {
      $('#fileId_'+ $scope.$id +' .mdr-file-dad-content div').fadeOut('slow', function() { $(this).remove(); });
      $("#fileId_"+ $scope.$id +' .mdr-file-dad-content button').fadeOut('slow');
    };


    /** Upload
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    $scope.upload = function(element)
    {
      // Se obtienen los archivos
      var files = element.files;
      // Se envian los archivos
      uploadFiles(files);
    };


    function uploadFiles(files)
    {
      $scope.count = {
        send: 0,
        complete: 0,
        invalid: 0
      };
      // Si es multiple
      if( validMultiple(files) ) {
        // Si no exede el limite de archivos
        if ( validLimit(files) ) {
          // Se envian los archivos
          $.each(files, function(k, v){
            // Se envia el archivo
            uploadFile(k,v);
          });
        }
      }
      $('#fileId_'+ $scope.$id +' input').replaceWith($('#fileId_'+ $scope.$id +' input').val('').clone(true));
    }


    // Se sube file por file
    function uploadFile(k,v)
    {
      // SE INSTANCIA EL XHR
      var xhr = new XMLHttpRequest();
      // Se abre el xhr
      xhr.open('POST', $scope.url, true);
      // Se agregan los headers al xhr
      if ($scope.headers !== undefined) {
        var headers = $scope.headers;
        for (var header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
      }
      xhr.addEventListener("loadstart", loadStart, false);
      xhr.addEventListener("progress", updateProgress, false);
      xhr.addEventListener("load", transferComplete, false);
      xhr.addEventListener("error", transferFailed, false);
      xhr.addEventListener("abort", transferCanceled, false);

      // SE INSTANCIA EL FORM DATA
      var formData = new FormData();
      // Se agrega el file en el formData
      formData.append('file', v);

      // SE INSTANCIA EL FILEREAD
      // Lee los atributos del file
      var reader = new FileReader();
      // Lee la url temporal del file
      reader.readAsDataURL(v);
      // Cuando se carga el file
      reader.onload = function (e) {

        // Se valida que el archivo sea valido
        var validFile = isValid(v);

        // Se crea el preview
        createPreview(v, k, e.target.result, validFile.icon, validFile.messages);

        // Se valida el tipo y el tamaño
        if (validFile.resp) {
          // Se envia el formData al server
          $scope.$apply(function () {
            $scope.count.send++;
          });
          xhr.send(formData);
        } else {
          $scope.$apply(function () {
            $scope.count.invalid++;
          });
          // Se aborta el envio de formData al server
          xhr.abort();
        }

      };

      // Caundo inicia la carga del archivo
      function loadStart(){
        //console.log('Load start');
      }
      function updateProgress (e) {
        if (e.lengthComputable) {
          var percentage = (e.loaded / e.total) * 100;
          $('#fileId_'+ $scope.$id + ' .mdr-file-dad-content .preview-'+ k +' .progress .progress-bar').css('width', percentage + '%');
        }
      }
      function transferComplete (e) {
        $scope.$apply(function () {
          $scope.count.complete++;
          $scope.model = xhr.response;
        });
        $('#fileId_'+ $scope.$id +' .mdr-file-dad-content .preview-'+ k).fadeOut('slow', function() { $(this).remove(); });
      }
      function transferFailed (e) {
        console.log("An error occurred while transferring the file.");
      }
      function transferCanceled (e) {
        console.log("The transfer has been canceled by the user.");
      }
    }


    // SE CREA EL PREVIEW
    function createPreview(v,k,url,icon,messages)
    {
      // Se obtiene el tamaño del archivo
      var humanSize = bytesToSize(v.size);

      var img = null;
      if (icon) {
        img = '<span class="glyphicon glyphicon-file"></span>';
      } else {
        img = '<img src="'+ url +'">';
      }

      var preview =
      '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 preview-'+ k +'">' +
        '<div class="thumbnail">' +
          img +
          '<div class="progress">' +
            '<div class="progress-bar" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>' +
          '</div>' +
          '<div class="caption">' +
            '<p>'+ v.name +'<span class="text-muted"> / '+ humanSize +'</span></p>' +
          '</div>' +
        '</div>' +
      '</div>';

      $("#fileId_"+ $scope.$id +' .mdr-file-dad-content').append($(preview).fadeIn('slow'));

      if (messages !== undefined) {
        messages.forEach(function(msg){
          $("#fileId_"+ $scope.$id +' .mdr-file-dad-content .preview-'+ k +' .thumbnail .caption').append('<p class="text-danger">'+ msg +'</p>');
        });
      }

    }


    // VALID FUNCTIONS
    function isValid(file)
    {
      var messages = [];
      var icon = false;

      var ext = validExt(file);
      var size = validSize(file);

      if (ext.icon || size.icon) {
        icon = true;
      }

      if (!ext.resp) {
        messages.push(ext.msg);
      }
      if (!size.resp) {
        messages.push(size.msg);
      }

      if ( ext.resp && size.resp ) {
        return { resp: true,  icon: icon };
      }

      return { resp: false, icon: icon, messages: messages};
    }


    function validExt(file)
    {
      // Img previe or icon
      var icon = false;

      // Se decide si se va mostrar el preview o un icono
      if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/svg+xml' && file.type !== 'image/gif') {
        icon = true;
      }

      if ($scope.formats === undefined) {
        return { resp: true, icon: icon, msg: '' };
      }

      // Extencion del archivo
      var fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
      // extensiones aceptadas
      var formats = $scope.formats;

      // Si los formatos son de tipo string se convierte en array (stringToArray)
      if (typeof formats == 'string') {
        formats = formats.split(',');
      }

      // Si existe la extencion entre las extenciones validas
      for (var i = 0; i < formats.length; i++) {
        if (fileExtension == formats[i].trim()) {
          return { resp: true, icon: icon, msg: ''};
        }
      }

      return { resp: false, icon: icon, msg: 'File type '+ fileExtension +' not allowed' };
    }


    function validSize(file)
    {
      // Img previe or icon
      var icon = false;
      // Tamaño del archivo
      var size = file.size;

      // Se decide si se va mostrar el preview o un icono
      if (size > (5 * 1000) * 1024) {
        icon = true;
      }

      if ($scope.size === undefined) {
        return { resp: true, icon: icon };
      }

      // Tamaño maximo
      var maxSize = ($scope.size * 1000) * 1024;


      if (size < maxSize) {
        return { resp: true, icon: icon};
      }

      return { resp: false, icon: icon, msg: 'File exceeds size '+ $scope.size +'MB'};
    }

    function validLimit(files)
    {
      if ($scope.limit === undefined) {
        return true;
      }
      if ($scope.limit < files.length) {
        alert('Max files upload is '+ $scope.limit);
        return false;
      }
      return true;
    }

    // Se valida si el imput es multiple
    function validMultiple(files)
    {
      if($attrs.multiple && (files.length > 1)){
        alert('One file for time');
        return false;
      }
      return true;
    }

    // Convierte los bits en 'Bytes', 'KB', 'MB', 'GB', 'TB'
    function bytesToSize(bytes)
    {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return 'n/a';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      if (i === 0) return bytes + ' ' + sizes[i];
      return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    }

    /*
    |- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    |   watch
    |- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    $scope.$watchCollection('count', function(newValue, oldValue)
    {
      if (newValue.send == newValue.complete && newValue.invalid > 0) {
        $("#fileId_"+ $scope.$id +' .mdr-file-dad-content button').fadeIn('slow');
      }
    });


  }])

  .directive('mdrFile', ['$compile', function($compile){
    /**
    * use
    * @param url {string}
    * @param model {object}
    * @param headers {object}
    * @param size {number} Max size in MB to file.
    * @param limit {number} Max number files to upload.
    * @param formats {array, string} Extensions permitted to the file.
    * @param text {string} Text into area drag and drop.
    * @param multiple {boolean}
    * @param disabled {boolean}
    * <mdr-file url="file/photo" mode="modelo" headers="[token,'shhh']" size="5" limit="10" formats="'jpg,png,gif'" disabled="true" multiple="false" text="Arrastra o haz clic aquí"></mdr-file>
    */

    var linker = function(scope, element, attrs)
    {
      // Se remueve el attr multiple
      if (attrs.multiple !== undefined || attrs.multiple) {
        element.find('input').removeAttr('multiple');
      }

      if (attrs.disabled) {
       element.find('.mdr-file-dad').addClass('disabled');
      }

      $compile(element.contents())(scope);
    };

    return {
      restrict: 'E',
      controller: 'FileCtrl',
      link: linker,
      scope: {
        url: '@',
        headers: '=',
        model: '=',
        size: '=',
        limit: '=',
        formats: '=',
        disabled: '=',
        text: '@'
      },
      template:
      '<div class="mdr-file-dad" id="fileId_{{$id}}">' +
        '<div class="mdr-file-dad-text">' +
          '<h3><span class="glyphicon glyphicon-cloud-upload"></span>{{text}}</h3>' +
        '</div>' +
        '<input type="file" name="file" onchange="angular.element(this).scope().upload(this)" ng-model="model" ng-disabled="disabled" multiple>' +
        '<div class="row mdr-file-dad-content">'+
          '<button type="button" class="close" aria-label="Close" ng-click="clearContent()"><span aria-hidden="true">&times;</span></button>' +
        '</div>' +
      '</div>'
    };


  }]);

})();
