import{a as v,j as e,V as y,N as u,c as b,d as w,u as g,r as N,C,h as _}from"./index-1KgNrpDo.js";const P=({items:a,length:s})=>{var c;const{name:n,itemAttribute:i,price:o,defaultPrice:m}=(c=a==null?void 0:a.card)==null?void 0:c.info,d=v(),x=t=>{d(b(t))},l=t=>{d(w(t))};return e.jsxs("div",{className:"flex my-5",children:[e.jsx("div",{children:(i==null?void 0:i.vegClassifier)==="VEG"?e.jsx("img",{className:"w-5 border-none scale-75",src:y}):e.jsx("img",{className:"w-5 border-none scale-75",src:u})}),e.jsx("div",{className:"w-2/3 text-sm mx-2",children:n}),e.jsxs("div",{className:"relative mx-1 my-auto flex justify-center items-center w-20 h-10 bg-white shadow-lg border-slate-300 border-[1px] text-[#60b246] font-semibold text-[0.75rem]",children:[e.jsx("div",{className:"p-2 mx-3 text-lg cursor-pointer",onClick:()=>l(a),children:"-"}),e.jsx("div",{className:"absolute p-2 mx-1",children:s}),e.jsx("div",{className:"p-2 mx-3 text-lg  cursor-pointer",onClick:()=>x(a),children:"+"})]}),e.jsxs("div",{className:"text-sm my-auto",children:[e.jsx("span",{children:"₹"}),o/100||m/100]})]})},S=()=>{var d,x;const a=g(l=>l.cart.items),s=g(l=>l.cart.restaurant),[n,i]=N.useState(null),o=v();N.useEffect(()=>{(()=>{const c=a.reduce((t,r)=>{var h,j,p,f;return t+(((j=(h=r==null?void 0:r.card)==null?void 0:h.info)==null?void 0:j.price)/100||((f=(p=r==null?void 0:r.card)==null?void 0:p.info)==null?void 0:f.defaultPrice)/100)*r.quantity},0);i(c)})()},[a]);const m=()=>{o(_())};return a.length===0?e.jsxs("div",{className:"w-screen h-[80vh] flex flex-col justify-center items-center",children:[e.jsx("img",{className:" w-72",src:"./Images/Empty_cart.avif",alt:"Empty Cart"}),e.jsx("h1",{className:"mt-5 mb-2 font-extrabold text-lg text-[#535665]",children:"Your cart is empty"}),e.jsx("p",{className:"text-sm text-[#7E808C]",children:"You can go to home page to view more restaurants"})]}):e.jsx("div",{className:"absolute top-0 flex justify-center w-full h-full pt-20 bg-gray-200",children:e.jsxs("div",{className:"flex flex-col gap-4 p-8 md:w-4/6 md:grid md:grid-cols-12",children:[e.jsxs("div",{className:"md:col-span-8",children:[e.jsxs("div",{className:"items-center justify-center p-8 bg-white md:grid md:grid-cols-12",children:[e.jsxs("div",{className:"flex flex-col justify-center md:col-span-8",children:[e.jsx("h1",{className:"text-lg font-bold text-gray-800",children:"Account"}),e.jsx("p",{className:"py-4 text-gray-500",children:"To place your order now, log in to your existing account or sign up"}),e.jsxs("div",{className:"flex flex-col items-center justify-center md:col-span-4 md:flex-row",children:[e.jsxs("div",{className:"w-full px-4 py-2 text-center text-green-600 border border-green-600 cursor-pointer",children:[e.jsx("div",{className:"text-xs",children:"Have an account?"}),e.jsx("div",{className:"text-sm font-bold uppercase",children:"Log in"})]}),e.jsxs("div",{className:"w-full px-4 py-2 mx-4 my-2 text-center text-white bg-green-600 border border-green-600 cursor-pointer md:my-0",children:[e.jsx("div",{className:"text-xs",children:"New to NomNomFoods?"}),e.jsx("div",{className:"text-sm font-bold uppercase",children:"Sign up"})]})]})]}),e.jsx("div",{className:"items-center justify-center hidden md:col-span-4 md:flex",children:e.jsx("img",{src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r",alt:"food"})})]}),e.jsx("div",{className:"p-8 my-4 bg-white",children:e.jsx("h1",{className:"col-span-4 font-bold text-gray-400",children:"Delivery Address"})}),e.jsx("div",{className:"p-8 my-4 bg-white",children:e.jsx("h1",{className:"col-span-4 font-bold text-gray-400",children:"Payment"})})]}),e.jsxs("div",{className:"bg-white  md:col-span-4",children:[e.jsxs("div",{className:"grid grid-cols-12 p-8",children:[e.jsx("div",{className:"col-span-3",children:e.jsx("img",{className:"w-12 h-12",src:C+(s==null?void 0:s.cloudinaryImageId),alt:"restaurant-logo"})}),e.jsxs("div",{className:"col-span-9",children:[e.jsx("h1",{className:"font-bold text-md",children:s==null?void 0:s.name}),e.jsx("span",{className:"text-gray-500 text-sm relative  -top-[0.4rem]",children:s==null?void 0:s.city}),e.jsx("hr",{className:"w-12 border-b-2 border-gray-950"})]})]}),e.jsx("div",{className:"m-auto flex justify-end text-sm cursor-pointer text-[#60b246] w-5/6",onClick:m,children:"Clear Cart"}),e.jsx("div",{className:"px-4",children:a&&[...new Set(a)].map(l=>{var c,t;return e.jsx(e.Fragment,{children:e.jsx(P,{items:l,length:l==null?void 0:l.quantity},(t=(c=l==null?void 0:l.card)==null?void 0:c.info)==null?void 0:t.id)})})}),e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Bill Details"}),e.jsxs("div",{className:"flex justify-between py-1 text-sm text-gray-400",children:[e.jsx("div",{className:"text-xs",children:"Item Total"}),e.jsxs("div",{className:"text-xs",children:[e.jsx("span",{children:"₹"})," ",Math.ceil(n,2)]})]}),e.jsxs("div",{className:"flex justify-between py-1 pb-4 text-xs text-gray-400 border-b border-gray-200",children:[e.jsxs("div",{children:["Delivery Fee | ",s==null?void 0:s.sla.lastMileTravelString]}),e.jsxs("div",{children:[e.jsx("span",{children:"₹"})," ",((d=s==null?void 0:s.feeDetails)==null?void 0:d.totalFee)/100]})]}),e.jsxs("div",{className:"flex justify-between py-1 pt-4 text-xs text-gray-400",children:[e.jsx("div",{children:"Delivery tip"}),e.jsx("div",{className:"cursor-pointer text-[#60b246]",children:"Add tip"})]}),e.jsxs("div",{className:"flex justify-between py-1 text-xs text-gray-400",children:[e.jsx("div",{children:"Platform fee"}),e.jsxs("div",{children:[e.jsx("span",{children:"₹"})," 4"]})]}),e.jsxs("div",{className:"flex justify-between py-1 pb-4 text-xs text-gray-400 border-b-2 border-gray-900",children:[e.jsx("div",{children:"GST and Restaurant Charges"}),e.jsx("div",{children:"NoGSThehe"})]}),e.jsxs("div",{className:"flex justify-between my-3 text-sm font-bold",children:[" ",e.jsx("span",{children:"TO PAY"}),e.jsxs("span",{children:["₹",Math.ceil(n,2)+((x=s==null?void 0:s.feeDetails)==null?void 0:x.totalFee)/100+4]})]})]})]})]})})};export{S as default};
