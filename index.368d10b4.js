$(document).ready((function(){$(".slider").slick({arrows:!1,dots:!0,slidesToShow:1,centerMode:!0,autoplay:!0,speed:3e3,autoplaySpeed:800,mobileFirst:!0,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0,variableWidth:!0})})),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),closeAnchorLink:document.querySelector("[data-anchor-close]"),closeModalbuy:document.querySelector("[data-buy-modal-close]"),modal:document.querySelector("[data-menu]"),body:document.querySelector("body"),buyButton:document.querySelector(".js-buy-button")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll-not-for-Yura"),e.buyButton.classList.toggle("hide-button")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.closeAnchorLink.addEventListener("click",t),e.closeModalbuy.addEventListener("click",t)})(),(()=>{const e={iceCreamEl:document.querySelector(".js-open-more-ice-cream"),iceCoffeeEl:document.querySelector(".js-open-more-ice-coffee"),milkshakesEl:document.querySelector(".js-open-more-milkshakes"),iceCreamText:document.querySelector(".js-more-text-ice-cream"),iceCoffeeText:document.querySelector(".js-more-text-ice-coffee"),milkshakesText:document.querySelector(".js-more-text-milkshakes")};e.iceCreamEl.addEventListener("click",(function(){e.iceCreamText.classList.toggle("text-hidder"),e.iceCreamEl.classList.toggle("rotate-button")})),e.iceCoffeeEl.addEventListener("click",(function(){e.iceCoffeeText.classList.toggle("text-hidder"),e.iceCoffeeEl.classList.toggle("rotate-button")})),e.milkshakesEl.addEventListener("click",(function(){e.milkshakesText.classList.toggle("text-hidder"),e.milkshakesEl.classList.toggle("rotate-button")}))})(),(()=>{const e={openModalBtn:document.querySelector(".js-our-location-open"),closeModalBtn:document.querySelector(".js-our-location-close"),modal:document.querySelector(".js-our-location-window"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll-not-for-Yura")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openFranchiseBtn:document.querySelector(".js-franchise-open"),closeFranchiseBtn:document.querySelector(".js-franchise-close"),modalFranchiseWindow:document.querySelector(".js-franchise-window"),body:document.querySelector("body")};function t(){e.modalFranchiseWindow.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll-not-for-Yura")}e.openFranchiseBtn.addEventListener("click",t),e.closeFranchiseBtn.addEventListener("click",t),console.log(e.openFranchiseBtn),console.log(e.closeFranchiseBtn)})(),(()=>{const e={openModalBuyBtn:document.querySelector("[data-modal-buy-open]"),openModalBuySecondBtn:document.querySelector("[data-modal-buy-second-open]"),closeModalBuyBtn:document.querySelector("[data-modal-buy-close]"),modalBuy:document.querySelector("[data-modal-buy]"),buyBtn:document.querySelector(".js-buy-button-modal"),body:document.querySelector("body")};function t(){e.modalBuy.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),document.querySelector("[data-total-price]").textContent=0,document.querySelector("[data-value]").textContent=0;for(let e=1;e<4;e+=1)document.querySelector(`.js-value-${e}`).textContent=0}e.openModalBuyBtn.addEventListener("click",t),e.openModalBuySecondBtn.addEventListener("click",t),e.closeModalBuyBtn.addEventListener("click",t),e.buyBtn.addEventListener("click",t)})();const e=function({selector:e,value:t=0,step:o=1,price:n=0}={}){this._value=t,this._step=o,this._price=n,this._totalPrice=0,this._refs=this._getRefs(e),this._bindEvents(),this.updateUI()};e.prototype._getRefs=function(e){const t={};return t.container=document.querySelector(e),t.incrementBtn=t.container.querySelector("[data-increase]"),t.decrementBtn=t.container.querySelector("[data-decrease]"),t.value=t.container.querySelector("[data-value]"),t.price=document.querySelector("[data-total-price]"),t.iceCreamPic=t.container.previousElementSibling,t},e.prototype._bindEvents=function(){this._refs.incrementBtn.addEventListener("click",(()=>{this.increment(),this.updateUI()})),this._refs.decrementBtn.addEventListener("click",(()=>{this.decrement(),this.updateUI()})),this._refs.iceCreamPic.addEventListener("click",(()=>{this.increment(),this.updateUI()}))},e.prototype.increment=function(){this._value+=this._step,this._totalPrice=Number(document.querySelector("[data-total-price]").textContent)+this._price},e.prototype.decrement=function(){this._value<=0?this._value=0:(this._value-=this._step,this._totalPrice=Number(document.querySelector("[data-total-price]").textContent)-this._price)},e.prototype.updateUI=function(){this._refs.value.innerHTML=this._value,this._refs.price.innerHTML=this._totalPrice},new e({selector:"#counter-1",step:1,price:12}),new e({selector:"#counter-2",step:1,price:15}),new e({selector:"#counter-3",step:1,price:14}),(()=>{const e={openModalAboutBtn:document.querySelector("[data-modal-about-open]"),closeModalAboutBtn:document.querySelector("[data-modal-about-close]"),modalAbout:document.querySelector("[data-modal-about]"),body:document.querySelector("body")};function t(){e.modalAbout.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll-not-for-Yura")}e.openModalAboutBtn.addEventListener("click",t),e.closeModalAboutBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.368d10b4.js.map
