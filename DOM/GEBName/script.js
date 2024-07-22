function collectData(){
    const languageproficiencyEls = document.getElementsByName(
      "languageproficiency"
    );
    console.log(languageproficiencyEls);

    // Loop through the node list to find the radio button
    for (let i = 0; i < languageproficiencyEls.length; i++) {
      if (languageproficiencyEls[i].checked) {
        console.log(
          `The Selected Language is : ${languageproficiencyEls[i].value}`
        );
      }
    }
}

//log all elements with the name email
const emailEls = document.getElementsByName("email")
console.log(emailEls);