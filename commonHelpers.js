import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as h}from"./assets/vendor-77e16229.js";const d=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.disabled=!0;let u;const p={message:"Please choose a date in the future!",messageColor:"white",backgroundColor:"red",iconUrl:"../img/cancel-icon.svg",close:!1,position:"topRight",timeout:!1},s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=Date.now(),e=t[0].getTime();e-n>0?(h.destroy(),o.disabled=!1):(h.error(p),o.disabled=!0),u=e}};y(d,S);o.addEventListener("click",g);function g(t){o.disabled=!0,d.disabled=!0;const n=Date.now(),e=setInterval(()=>{const l=Date.now(),{days:m,hours:r,minutes:i,seconds:c}=b(u-l);s.days.textContent=a(m),s.hours.textContent=a(r),s.minutes.textContent=a(i),s.seconds.textContent=a(c)},1e3);setTimeout(()=>{clearInterval(e),d.disabled=!1},u-n)}function b(t){const r=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:i,minutes:c,seconds:f}}function a(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map