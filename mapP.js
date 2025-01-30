
//Discount products***
const products = [
    {name:"iphone",price:500},
    {name:"realmepro",price:800},
    {name:"oppo",price:900},

]

const newproduct = products.map(product=>({
        ...product,
        diccountPrice:product.price*0.9
}));

const productList = document.querySelector(".product-Name tbody");


      newproduct.forEach(product=>{
             const productCard = `<div class="productP">
           <tr>
    <td>${product.name}</td>  
    <td> $${product.price}</td>
    <td> $${product.diccountPrice.toFixed(2)}</td>
</tr>

</div>`;


        productList.innerHTML += productCard;
             
      }) 




      //Employess Salary****
       
const employees=[
    {name:"laxmi",salary:25000},
    {name:"menariya",salary:30000},
    {name:"mahi",salary:35000},
   ]    

   const employessSalary = employees.map(sal=>({
             ...sal,//The spread operator (...) is used to copy all items from one object or array into another, so we can add or change things without changing the original data.
            salaryWithBonus:sal.salary*1.1   //1 represent original slary  other one  is 10% of bonus is 0.1 or there 1 
        
   }));

   const employesList = document.querySelector(".database tbody")

          
      employessSalary.forEach(sal2=>{
                 const totalSal  = ` <div class="bonusWithsalary">
                 <tr>
               <td>${sal2.name}</td>
               <td>$${sal2.salary}</td>
               <td>$${sal2.salaryWithBonus.toFixed(2)}</td>
           </tr>
         </div>`
         employesList.innerHTML += totalSal;
        })



//List of Courses

    const Courses=[
        {Title:"javascript Basics", price:1000},
        {Title:"react", price:2000},
        {Title:"html,css", price:3000}
    ]

        
    const AllCourse = Courses.map(C1=>({
            ...C1,
            FinalPrice:C1.price*0.15

    }))

    let listOFCourse = document.querySelector(".AllCourses tbody")

    AllCourse.forEach(C2=>{ 
              const course =` <div class="course">
            <td>${C2.Title}</td>
            <td>$${C2.price}</td>
            <td>$${C2.FinalPrice.toFixed(2)}</td>
    </div>`;

    listOFCourse.innerHTML += course


    })



    // Display Product Reviews

    const Reviewer =[
      {product:"Iphone",reviwer:"mahi",rating:5,text:"Amazing phone!"},
      {product:"Samsung",reviwer:"rahi",rating:5,text:"Great display!"},
      {product:"OnePlus",reviwer:"kavi",rating:5,text:"good performance,but average batter!"},


    ]

    const AllReviewer = Reviewer.map(R1=>({ ...R1,
           Rating:"⭐".repeat(R1.rating)}))


    const tableReview = document.querySelector(".Product-revieews tbody");


         AllReviewer.forEach(R2=>{
             const revieRow = `<div class="review">
  <tr>
   <td>${R2.product}</td>
   <td>${R2.reviwer}</td>
   <td>${R2.Rating}</td>
   <td>${R2.text}</td>
</tr>
</div>`
tableReview.innerHTML += revieRow
      
                  
         })
