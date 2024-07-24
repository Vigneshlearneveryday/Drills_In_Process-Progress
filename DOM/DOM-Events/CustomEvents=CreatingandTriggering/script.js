// Accessing the username input and submit button

const usernameEl = document.getElementById("username");
const submitButtonEl = document.getElementById("submitButton");

//--- Create a custom

const usernameSubmitted = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: {
    Text: ""
  },
});

// Attach an Event Listener to the submit button

submitButtonEl.addEventListener("click",function(){
    usernameSubmitted.detail.text = usernameEl.value
    document.dispatchEvent("usernameSubmitted")
})