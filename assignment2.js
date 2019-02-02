/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];

/*********************************************************************************
* WEB222 - Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: LENY FE FERNANDEZ             Student ID: 120818174               Date: February 15, 2018
*
********************************************************************************/


 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

	 var CustomerDB = {
		customers: [],
		addresses: [],
		stores: [],
		

      //insertData method that takes one parameter (allData) and store it in the appropriate arrays(customers, addresses, stores) of the object CustomerDB
    insertData: function(allData)
     {
             for (var i = 0; i < allData.length ; i++)
           {
               if(allData[i].type === "store")
                    this.addStore(allData[i]); //calling the addStore function to save all the data of type store

               else if(allData[i].type === "customer") 
                     this.addCustomer(allData[i]);		// calling the addCustomer function to save all the data of type customer

               else if (allData[i].type === "address")
                      this.addAddress(allData[i]);		//calling the addAddress function to save all the data of type address
             }

      },

       //functions to manipulate customer data (addCustomer, outputCustomerById, outputAllCustomer, OutputCustomersByStore)

     addCustomer: function(customerObj)
      {
             customerObj.data.add_date = new Date();
             this.customers.push(customerObj);
      },

      outputCustomerById: function(customer_id)
       {
             var customer_info;
             var customer_address;
             var fullcustomer_info;

             for(var i = 0; i< this.customers.length; i++)
             {
               if(customer_id === this.customers[i].data.customer_id)
               {
                 customer_info = "Customer " 
                                  + this.customers[i].data.customer_id + ": " 
                                  + this.customers[i].data.first_name + " " 
                                  + this.customers[i].data.last_name + " (" 
                                  + this.customers[i].data.email + ") \n";

                customer_address = "Home Address: " + this.getAddressById(this.customers[i].data.address_id) + "\n";

                fullcustomer_info = customer_info + customer_address + "Joined: " + this.customers[i].data.add_date + "\n\n";

                return fullcustomer_info;
               }

             }
       },

       outputAllCustomers: function()
       {
             console.log("All Customer \n\n");

             for(var i = 0; i< this.customers.length; i++)
               console.log(this.outputCustomerById(this.customers[i].data.customer_id));

       },

       outputCustomersByStore: function(store_id)
       {
               console.log("Customers in Store: " + this.getStoreById(store_id) + "\n\n");

               for(var i = 0; i<this.customers.length; i++)
               {	 if(store_id === this.customers[i].data.store_id)
                 console.log(this.outputCustomerById(this.customers[i].data.customer_id))
               }
       },

       removeCustomerById: function(customer_id)
       {
                 for(var i = 0; i < this.customers.length; i++)
                 {
                     if(customer_id === this.customers[i].data.customer_id)
                     {
                       this.removeAddressById(this.customers[i].data.address_id)
                       this.customers.splice(i,1);


                     }
                 }
       },

       //functions to manipulate the address data

       addAddress: function(addressObj)
        {
              this.addresses.push(addressObj);
        },


       getAddressById: function(address_id)
       {
              var address;
              for(var i = 0; i < this.addresses.length; i++)
              {
                  if(address_id === this.addresses[i].data.address_id){
                        address = this.addresses[i].data.address + " " +
                                   this.addresses[i].data.city + ", " +
                                   this.addresses[i].data.province + ". " +
                                   this.addresses[i].data.postal_code;					 
                  }
              }
              return address;
       },

       outputAllAddresses: function()
       {
                console.log("All Addresses\n\n");
                for(var i = 0; i <this.addresses.length; i++){
                  console.log("Address " + this.addresses[i].data.address_id + ": " +
                        this.getAddressById(this.addresses[i].data.address_id) + "\n\n");
                }

        },
       removeAddressById: function(address_id)
        {
                //start by counting how many customer in customers array and stores in stores array
                //has the address_id

                  var count = 0; //counter for customer and objects that has the address_id

                  for(var i = 0; i < this.customers.length; i++)
                  {
                      if(address_id === this.customers[i].data.address_id)
                      count += 1;
                  }


                  for (i = 0; i <this.stores.length; i++)
                  {
                      if(address_id === this.stores[i].data.address_id)
                        count +=1;
                  }


                  //if counter is more than 1, that means there are more than one who uses that address_id
                  if (count === 1)
                    {		for( i =0 ; i < this.addresses.length; i++)
                        {
                            if(address_id === this.addresses[i].data.address_id)
                            {
                              this.addresses.splice(i,1);
                            }
                        }
                   }
        },

      addStore: function(storeObj)
      {
              this.stores.push(storeObj);
      },


      getStoreById: function(store_id)
        {
                var store_name;

                for(var i = 0; i < this.stores.length; i++)
                {
                  if(store_id === this.stores[i].data.store_id)
                    store_name = this.stores[i].data.name;
                }
                return store_name;
        },


      outputAllStores: function()
      {
            console.log("All Stores \n\n");

            for(var i = 0; i< this.stores.length; i++)
            {
                  console.log("Store " + this.stores[i].data.store_id + ": " +
                               this.getStoreById(this.stores[i].data.store_id) + "\n" +
                              "Location: " + this.getAddressById(this.stores[i].data.address_id)+ "\n\n");

            }
      }

	
	};



/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/


// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 
