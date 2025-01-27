
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

const productList = document.querySelector("#products-list");


      newproduct.forEach(product=>{
             const productCard = ` <div class="productP">
              <h3>${product.name}</h3>
              <p>Original Price: $${product.price}</p>
              <p>Discounted Price: $${product.diccountPrice.toFixed(2)}</p>
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

   const employesList = document.querySelector(".employes-list")

          
      employessSalary.forEach(sal2=>{
                 const totalSal  = ` <div class="bonusWithsalary">
               <h3>${sal2.name}</h3>
               <p>Salary:$${sal2.salary}</p>
               <p>Salary With Bonus:$${sal2.salaryWithBonus.toFixed(2)}</p>

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

    let listOFCourse = document.querySelector(".ListOFCouse")

    AllCourse.forEach(C2=>{
              const course =` <div class="course">
            <h3>${C2.Title}</h3>
            <p>Original price:$${C2.price}</p>
            <p>Discount Price: $${C2.FinalPrice.toFixed(2)}</p>
    </div>`;

    listOFCourse.innerHTML += course


    })



    // Display Product Reviews

      const product = [
        {name:"HeadPhones",price:1500, rating:4.688},
        {name:"Leptop",price:25000, rating:5.768},
        {name:"Ipaid",price:35000, rating:4.800}
      ]
         