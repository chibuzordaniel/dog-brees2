
const date = new Date;
// console.log(date.toLocaleDateString())
document.getElementById('date').innerHTML = date.toDateString();


const baseUrl = `https://dog.ceo/api/breeds/list`;
const selectBreed = document.querySelector('.breed');
const  breed = document.querySelector('.breed')
const dogCard = document.querySelector('.dog-card')
const randomize = document.querySelector('#randomize')
const displayNumber = document.querySelector('.display-number')
const africa = 'african';





// displayNumber
//asynchrous function

const dogBreed = 'affenpinscher'

const getNumberOfImages = async (e) => {
  
// for (var i=0; i<=100; i++) {
//   console.log(i);
  
// }

  totalNumberOfImages = e.target.value;
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/${totalNumberOfImages}`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    // Callback function
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
}

displayNumber.addEventListener('click', getNumberOfImages)







// list of breeds

const getListOfBreeds = async () => {
    try {
        const data = await fetch(baseUrl)
        const res = await data.json();
        // console.log(res.message)
        selectCategory(res.message)
    } catch (error) {
        console.log(error.message, 'Not found')
    }
};

const selectCategory = (data) => {
    const breedOption = `
     ${data?.map((el) =>(`<option value=${el}>${el}</option>`))}`
    selectBreed.innerHTML = breedOption;
}

getListOfBreeds()

// breed changing name 
breed.addEventListener('click', async () => {
    console.log(breed.value)
    document.getElementById('list').innerHTML = breed.value;
})

breed.addEventListener('click', async () => {
    // console.log(breed.value)
    document.getElementById('map').innerHTML = breed.value
})


// get images of dog breed

const getBreedName = (e) => {
   const value = e.target.value;
   getBreedByName(value)
}

selectBreed.addEventListener('click', getBreedName)

const  getBreedByName = async (name, num = 12) => {
    try {
        const data = await fetch(`https://dog.ceo/api/breed/${name}/images/random/${num}`)
        const image = await data.json()
        // console.log(image?.message)
        randomImages(image?.message)
    } catch (error) {
        console.log(error.message, 'check again')
    }
}

const randomImages = (data) => {
    const dogImage = `
      ${data?.map((url) => (`<img src=${url} alt="dog_image">`))}`
      dogCard.innerHTML = dogImage;
  }


  
  const defaultDogList = async () => {
    try {
        const data = await fetch(`https://dog.ceo/api/breed/${africa}/images/random/12`);
        const defaultData = await data.json();
        // console.log(defaultData.message)
        randomImages(defaultData.message)

    } catch (error) {
        console.error(error.message, 'try again...')
    }
    }

  defaultDogList()


// The randomize image display
const hound = 'affenpinscher';

randomize.addEventListener('click', async () => {
  try{
    const data = await fetch(`https://dog.ceo/api/breed/${hound}/images/random/12`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
});



