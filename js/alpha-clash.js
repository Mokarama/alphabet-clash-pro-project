function play(){
    // console.log('play started')

    // ----step-1:Hide the home screen .to hide the screen add the class hidden to the home screen
    // -----step-2:Show the play ground

    const homeSection = document.getElementById('home-screen');
    // console.log(homeSection.classList)
    homeSection.classList.add('hidden');




    const playGroundSection = document.getElementById('play-ground');
    // console.log( playGroundSection.classList)
    playGroundSection.classList.remove('hidden')
}


// function play(){
//     hideElementById('home-screen');
// }




