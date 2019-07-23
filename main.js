const form = document.forms[0]
const nameField = document.querySelector('#name')
const photoFiled = document.querySelector('#photo')
const textArea = document.querySelector('#text')
const radioOption1 = document.querySelector('#inlineRadio1')
const radioOption2 = document.querySelector('#inlineRadio2')
const lead = document.querySelector('.lead')
const h3 = document.querySelector('h3')
const displaycard = document.querySelector('#printcard')



form.addEventListener('input', function (event) {
  // 顯示user輸入的Name
  let input = event.target.value
  if (event.target.id === 'name') {
    h3.innerHTML = `Hello, ${input}`
  } else if (event.target.id === 'text') {
    let count = event.target.value.length
    let feedbackDiv = textArea.nextElementSibling
    // 驗證輸入框是否超過200字元
    if (count < 200) {
      feedbackDiv.innerHTML = `${200 - count} remains.`
      feedbackDiv.classList.add('text-danger')
    } else {
      feedbackDiv.innerHTML = `<i class="fa fa-thumbs-up" aria-hidden="true"></i> Look Great!`
      feedbackDiv.classList.replace('text-danger', 'text-success')
    }
  }
})


form.addEventListener('submit', function (event) {
  event.preventDefault()
  let htmlCotent = ``
  if (nameField.value.length > 0 && textArea.value.length > 200) {
    // step1:驗證照片提供網址與否上傳預設照片或超連結照片
    if (photoFiled.value === "") {
      photoFiled.value = 'https://picsum.photos/id/1062/200'
    }
    // step2 :判斷背景樣式
    if (radioOption1.checked) {
      let cardColor = document.querySelector('#printcard')
      cardColor.classList.add('bg-light', 'text-dark')
    } else {
      let cardColor = document.querySelector('#printcard')
      cardColor.classList.add('bg-dark', 'text-white')
    }
    // step3: 製作客製化名片
    htmlCotent = `
    <div class="my-card row">
      <div class="col-4">
        <img src="${photoFiled.value}" width="200" alt="Avatar" class="photo  my-3 border border-dark">
      </div>
      <div class="col-8">
        <h2 class="nameTitle text-capitalize"> ${nameField.value}</h2>
        <p class="intro text-justify">${textArea.value}</p>
      </div>
    </div>`

    displaycard.innerHTML = htmlCotent

    // step4: Reset Form
    let cardColor = document.querySelector('#printcard')
    nameField.value = ''
    photoFiled.value = ''
    textArea.value = ''
    // cardColor.classList.remove('bg-light', 'text-dark', 'bg-dark', 'text-white')
  } else {
    alert('please make sure the form information is correct')
  }
})



// lecture example code

// form.addEventListener('focus', function (event) {
//   // do something
//   console.log(event.eventPhase)
//   lead.innerHTML = `Your Focus: ${ event.target.id }`
// }, true)

// form.addEventListener('input', function (event) {
//   // do something
//   let input = event.target.value
//   if (event.target.id === 'name') {
//     h3.innerHTML = `Hello, ${ input } `
//   } else if (event.target.id === 'password') {
//     let count = event.target.value.length
//     let feedbackDiv = passwordField.nextElementSibling
//     if (count >= 6) {
//       feedbackDiv.innerHTML = 'Looks Great!'
//       feedbackDiv.classList.replace('text-danger', 'text-success')
//     } else {
//       feedbackDiv.innerHTML = `${ 200 - count } remains.`
//       feedbackDiv.classList.add('text-danger')
//     }
//   }
// })

// form.addEventListener('submit', function (event) {
//   // do something
//   event.preventDefault()
//   let name = nameField.value
//   let textFiled = textArea.value

//   if (name.length > 0 && textFiled.length >= 200) {
//     form.submit()
//   } else {
//     console.log('No pass')
//   }
// })
