let base64 = '';
function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    //   console.log(reader.result);
    //   base64 = reader.result;
    var inputData = reader.result;
    var replaceValues = inputData.slice(',')[0];
    base64 = inputData.replace(replaceValues+",","");
    console.log(base64);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 function fnUploadFile(){ 
 var file = document.querySelector('#file_upload').files[0];
 getBase64(file); // prints the base64 string
 console.log(file);
 }

 function fnConvertToFile(base64Data, fileName) {
        // const linkSource = `data:${contentType};base64,${base64Data}`;
        //  const linkSource = `data:application/pdf;base64,${base64Data}`;
        const linkSource = base64;
        const downloadLink = document.createElement("a");
        const fileNameSource = fileName;

        downloadLink.href = linkSource;
        downloadLink.download = fileNameSource;
        downloadLink.click();
}
  function fnDownloadFile(){
    
    fnConvertToFile(base64,'test');
 }