const toast=document.getElementById("toast");

function showToast(message){
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove("show"),2800);
}

function togglePanel(id, button){
  const panel=document.getElementById(id);
  if(!panel)return;
  panel.classList.toggle("open");
  const symbol=button.querySelector("span");
  if(symbol) symbol.textContent=panel.classList.contains("open")?"−":"＋";
}

document.querySelectorAll("[data-expand]").forEach(button=>{
  button.addEventListener("click",()=>{
    togglePanel(button.dataset.expand,button);
  });
});

document.querySelectorAll(".nav-btn").forEach(button=>{
  button.addEventListener("click",()=>{
    document.getElementById(button.dataset.target).scrollIntoView({behavior:"smooth"});
  });
});

document.querySelectorAll("[data-message]").forEach(button=>{
  button.addEventListener("click",()=>showToast(button.dataset.message));
});

document.getElementById("copyEmail").addEventListener("click",async()=>{
  const email="jonestuplano8@gmail.com";
  try{
    await navigator.clipboard.writeText(email);
    showToast("Email copied: "+email);
  }catch(e){
    showToast("Email: "+email);
  }
});

document.getElementById("topBtn").addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
});
