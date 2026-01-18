function myformsubmits(event) {
    event.preventDefault(); //Prevent the default form submission

// call the custom functions you want to execute before submitting the form
downloadFormData();
thanks();
}

function downloadFormData() {
    const form = document.getElementById('myform');
    const formData = new FormData(form);
    let dataString = '';

    for (let [Key, value] of formData.entries()) {
        datastring+= '';
    }

    // Create a Blob from the data string
    const blob = new Blob ([datastring], {
        type:'text/plain'
    });
    const url = URL.createObjectURL(blob);

    // Create a link to donload the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-data.txt';
    a.click();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the object URL after download
    URL.revokeObjectURL(url);

}

function thanks() {
    // Redirect to another page after download
    window.location.href = 'thankyou.html'; //Replace with your desired URL

}
  




