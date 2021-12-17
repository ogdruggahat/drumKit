
let buttonArr = document.querySelectorAll(".drum").length;

for(let i = 0;i<buttonArr;i++){

  function makeSound (key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3")
        tom1.play()
        break;
        case "a":
          var tom2 = new Audio("./sounds/tom-2.mp3")
          tom2.play()
          break;
          case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break;
            case "d":
              var tom4 = new Audio("./sounds/tom-4.mp3")
              tom4.play()
              break;
              case "j":
                var snare = new Audio("./sounds/snare.mp3")
                snare.play()
                break;
              case "k":
                var crash = new Audio("./sounds/crash.mp3")
                crash.play()
                break;
                case "l":
                  var bass = new Audio("./sounds/kick-bass.mp3")
                  bass.play()
                  break;
    
      default:
        console.log("error")
        break;
    }
  
  }
  function buttonAnimation(key){
   let pressedButton = document.querySelector("." + key)

   pressedButton.classList.add("pressed")

   setTimeout(function(){
    pressedButton.classList.remove("pressed")
   },100)
   

  }

  document.addEventListener("keydown",(event)=>{
    makeSound(event.key)
    buttonAnimation(event.key)
  })



  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHtml = this.innerHTML
    makeSound(buttonInnerHtml)
    buttonAnimation(this.innerHTML)
  })

}




