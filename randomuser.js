const getUserData=async ()=>{
    let res= await fetch('https://randomuser.me/api/?results=50')
   let data=await res.json()
   displayUser(data.results)
}

const displayUser=(users)=>{
    let userContainer=document.getElementById('user-container')

    users.forEach(user=>{
        console.log(user)
        let div=document.createElement('div');
        div.style.width='500px'
        div.style.margin='auto'
        div.innerHTML=`
        <div class="bg-white rounded-lg">
        <div class="  bg-slate-100 h-36 rounded-lg relative  border-b">
            <img src="${user.picture.medium}" class="w-[150px] object-cover m-auto rounded-full absolute left-2/4 top-[28%] translate-x-[-50%] border-4 border-white" alt="">
        </div>
        <div id="body" class="px-6 py-8">
            <div class="text-center my-8">
                <h3 class="text-lg text-slate-500 id="${user.email}-des">Hi, My name is</h3>
                <h3 class="text-[22px] capitalize" id="${user.email}-title">${user.name.title} ${user.name.first} ${user.name.last}</h3>
            </div>
            <div class="flex justify-between text-2xl px-14 my-4 text-lime-500">
                <button onmouseenter='user(${JSON.stringify(user)})' class="outline-none" ><i class="fa-solid fa-user"></i></button>
                <button onmouseenter='email(${JSON.stringify(user)})' class="outline-none" > <i class="fa-solid fa-envelope"></i></button>
                <button onmouseenter='phone(${JSON.stringify(user)})' class="outline-none" id="phone"><i class="fa-solid fa-phone"></i></button>
                <button onmouseenter='locations(${JSON.stringify(user)})' class="outline-none" id="location"><i class="fa-solid fa-location-dot"></i></button>
            </div>
        </div>
    </div>
        `
        userContainer.textContent=''
        userContainer.appendChild(div)
    })
}

//get html element
function getElementt(id){
    let titleElement=document.getElementById(id)
    return titleElement;
}

const user=(user)=>{
    let title= getElementt(`${user.email}-title`)
    title.innerText=`${user.name.title} ${user.name.first} ${user.name.last}`;
    let des= getElementt(`${user.email}-des`)
    des.innerText='Hi, My name is';
}

const email=(user)=>{
    let title=getElementt(`${user.email}-title`)
    title.innerText=`${user.email}`
    let des= getElementt(`${user.email}-des`)
    des.innerText='My email is'
}

const phone=(user)=>{
    let title=getElementt(`${user.email}-title`)
    title.innerHTML=`${user.phone}`
    let des= getElementt(`${user.email}-des`)
    des.innerText='My phone is'
}
const locations=(user)=>{
    let title=getElementt(`${user.email}-title`)
    title.innerText=`${user.location.city}, ${user.location.country}`
    let des= getElementt(`${user.email}-des`)
    des.innerText='My location is'
}