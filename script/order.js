class Food_menu {
    constructor(name, food_items) {
        this.name = name;
        this.food_items = food_items;
    };
}

class Food_item {
    constructor(food_name, description, price, ingredients) {
        this.food_name = food_name;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
    }
}

class Ingredient {
    constructor(name, description = "", price = 0.00, added = false) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.added = added;
    }
}


function dummy_data() {
    gluten_free = new Ingredient("Gluten free", "Will make dish gluten free while restoring original taste", 20.00);
    mayonnaise = new Ingredient("Mayonnaise");
    ketchup = new Ingredient("Ketchup");
    cheese = new Ingredient("Cheese", 10.00);
    jalapenos = new Ingredient("Jalapenos", "Medium-sized chili pepper", 10.00);
    sour_cream = new Ingredient("Sour cream dip", 10.00);
    bacon = new Ingredient("Bacon", 10.00);
    capsicum = new Ingredient("Capsicums", "Add green, red and yellow capsicums", 0.00);

    //Starters
    samosa = new Food_item("samosa", "Spicy mouth watering vegeterian snack from India. Served along with mint chutney and sweet and sour tamarind chutney", 100.00, [new Ingredient("Mint chutney", "Spicy sauce", 5.00, false), new Ingredient("Tamarind chutney", "", 5.00, false), new Ingredient("Paneer stuffing", "Replace original potato stuffing with cottage cheese stuffing", 10.00), gluten_free]);
    honey_chilli_potato = new Food_item("Chilli honey potato", "Crunchy potatoes cooked with spicy green chillies and sweet honey", 100.00, [capsicum,ketchup,mayonnaise]);
    fries = new Food_item("Fries", "Crunchy fries of regular potatoes", 80.00, [cheese, jalapenos, sour_cream]);
    sweet_potato_fries = new Food_item("Sweet Potato fries", "Crunchy fries of sweet potatoes", 80.00, [cheese, jalapenos, sour_cream]);
    nachos = new Food_item("Nachos", "Mexican dish that consists of heated tortilla chips covered with melted cheese", 120.00, [cheese, ketchup, mayonnaise]);
    burger = new Food_item("Burger", "Served in a Brioche Bun with lettuce, tomato, fries and selected filling", 120.00, [ new Ingredient("Vegan"), cheese, bacon]);


    pizza = new Food_item("Pizza", "Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with lots of topping fo your choice", 200.00, [new Ingredient("tomatoes"), new Ingredient("onion"), cheese, jalapenos, capsicum]);

    starter = new Food_menu("Starters", [samosa, honey_chilli_potato, fries, sweet_potato_fries, nachos, burger, pizza]);
    veg = new Food_menu("Vegetarian",[pizza, burger]);

    burger = new Food_item("Burger", "Served in a Brioche Bun with lettuce, tomato, fries and selected filling", 120.00, [new Ingredient("Chicken"), new Ingredient("Beef"),  cheese, bacon]);
    pizza = new Food_item("Pizza", "Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with lots of topping fo your choice", 200.00, [new Ingredient("Chicken"), new Ingredient("Beef"), cheese, jalapenos, capsicum]);

    meat = new Food_menu("Vegetarian",[pizza, burger]);
    kid = new Food_menu("Vegetarian",[nachos, fries]);

    house_red = new Food_item("House Red", "Red wine 175 ML",10.00);
    lazy_red = new Food_item("Lazy Bone Shiraz Red", "Red wine 175 ML",10.00);
    grigio_red = new Food_item("Grigio Red", "Red wine 175 ML",10.00);
    lazy_white = new Food_item("Lazy Bone Shiraz White", "White wine 175 ML",10.00);
    house_white = new Food_item("House White", "White wine 175 ML",10.00);
    grigio_white = new Food_item("Grigio White", "White wine 175 ML",10.00);
   

    
   
    summer_berry_spiritz = new Food_item("Summer Berry Spiritz", "Combination of Strawberry vodka, Crème de fraise & prosecco", 100.00);


    bombay_bramble = new Food_item("Bombay Bramble", "Bombay Bramble gin, lemon juice & sugar", 950.00
    );

    drink = new Food_menu("Drinks", [house_red,lazy_red,grigio_red,house_white,lazy_white,grigio_white,summer_berry_spiritz,bombay_bramble]);

    

    //console.log(drinks.food_items[0].food_items[0].food_items[0]);

    console.log(starter.food_items[0].food_name);
    console.log(starter.food_items[0].description);
    console.log(starter.food_items[0].price);
    console.log(starter.food_items[0].ingredients[0].name);
    console.log(starter.food_items[0].ingredients[1].name);
    console.log(starter.food_items[0].ingredients[2].name);
    



    var $starter = $("#starter");
    var $meat = $("#meat");
    var $veg = $("#veg");
    var $kid = $("#kid");
    var $drink = $("#drink");
    
   
    const starter_block = starter.food_items.reduce((html, food_item) => html +=
    `<div class="sub_menu_item_wrapper" >
        <div class="sub_menu_item_img"></div>
        <div class="sub_menu_item_details_wrapper" class="starter">
            <div class="sub_menu_name_price_wrapper">
                <div class="sub_menu_item_name">${food_item.food_name}</div>
                <div class="sub_menu_item_price"> ${food_item.price}</div>
            </div>
            <div class="sub_menu_item_desc">${food_item.description}</div>
            <div class="sub_menu_item_qty_wrapper" id="inc_dec">
                <div class="minus" ></div>
                <div class="qty"><label id="qty">0</label></div>
                <div class="plus" ></div>
            </div>
            <div class="sub_menu_item_ingredients" id="ingredients">

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[0].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[1].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[2].name}
                    </label>
                </div>
            
            </div>
        </div>
        
    </div>`, '');


    const meat_block = meat.food_items.reduce((html, food_item) => html +=
    `<div class="sub_menu_item_wrapper" >
        <div class="sub_menu_item_img"></div>
        <div class="sub_menu_item_details_wrapper">
            <div class="sub_menu_name_price_wrapper" >
                <div class="sub_menu_item_name">${food_item.food_name}</div>
                <div class="sub_menu_item_price"> ${food_item.price}</div>
            </div>
            <div class="sub_menu_item_desc">${food_item.description}</div>
            <div class="sub_menu_item_qty_wrapper">
                <div class="minus" ></div>
                <div class="qty"><label id="qty">0</label></div>
                <div class="plus" onclick="inc_qty()"></div>
            </div>
            <div class="sub_menu_item_ingredients" id="ingredients">

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[0].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[1].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[2].name}
                    </label>
                </div>
            
            </div>
        </div>
        
    </div>`, '');


    const veg_block = veg.food_items.reduce((html, food_item) => html +=
    `<div class="sub_menu_item_wrapper" >
        <div class="sub_menu_item_img"></div>
        <div class="sub_menu_item_details_wrapper">
            <div class="sub_menu_name_price_wrapper" >
                <div class="sub_menu_item_name">${food_item.food_name}</div>
                <div class="sub_menu_item_price"> ${food_item.price}</div>
            </div>
            <div class="sub_menu_item_desc">${food_item.description}</div>
            <div class="sub_menu_item_qty_wrapper">
                <div class="minus" ></div>
                <div class="qty"><label id="qty">0</label></div>
                <div class="plus" onclick="inc_qty()"></div>
            </div>
            <div class="sub_menu_item_ingredients" id="ingredients">

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[0].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[1].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[2].name}
                    </label>
                </div>
            
            </div>
        </div>
        
    </div>`, '');

    

    const kid_block = kid.food_items.reduce((html, food_item) => html +=
    `<div class="sub_menu_item_wrapper" >
        <div class="sub_menu_item_img"></div>
        <div class="sub_menu_item_details_wrapper">
            <div class="sub_menu_name_price_wrapper" >
                <div class="sub_menu_item_name">${food_item.food_name}</div>
                <div class="sub_menu_item_price"> ${food_item.price}</div>
            </div>
            <div class="sub_menu_item_desc">${food_item.description}</div>
            <div class="sub_menu_item_qty_wrapper">
                <div class="minus"></div>
                <div class="qty"><label id="qty">0</label></div>
                <div class="plus" ></div>
            </div>
            <div class="sub_menu_item_ingredients" id="ingredients">

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[0].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[1].name}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${food_item.ingredients[2].name}
                    </label>
                </div>
            
            </div>
        </div>
        
    </div>`, '');

    const drink_block = drink.food_items.reduce((html, food_item) => html +=
    `<div class="sub_menu_item_wrapper" >
        <div class="sub_menu_item_img"></div>
        <div class="sub_menu_item_details_wrapper">
            <div class="sub_menu_name_price_wrapper" >
                <div class="sub_menu_item_name">${food_item.food_name}</div>
                <div class="sub_menu_item_price"> ${food_item.price}</div>
            </div>
            <div class="sub_menu_item_desc">${food_item.description}</div>
            <div class="sub_menu_item_qty_wrapper">
                <div class="minus"></div>
                <div class="qty"><label id="qty">0</label></div>
                <div class="plus" ></div>
            </div>
           
        </div>
        
    </div>`, '');


   


    $starter.append(starter_block);
    $meat.append(meat_block);
    $veg.append(veg_block);
    $kid.append(kid_block);
    $drink.append(drink_block);
    
}

function load_data() {


}



$(document).ready(function () {
    var total=0;

    dummy_data();
    load_data();
    $('.sub_menu_item_qty_wrapper').on('click','.plus',function (e) {
        var $qty = $(this).closest('.sub_menu_item_qty_wrapper').find('.qty');
        var qty = Number($qty.text());
        if (qty < 100) {
            $qty.text(qty + 1);
            var price = Number($(this).closest('.sub_menu_item_qty_wrapper').closest('.sub_menu_item_details_wrapper').find('.sub_menu_name_price_wrapper').find('.sub_menu_item_price').text());
            total = total+price;
            $("#total").text(total)
            console.log(total);
            }
        
    });

    $('.sub_menu_item_qty_wrapper').on('click','.minus',function (e) {
        var $qty = $(this).closest('.sub_menu_item_qty_wrapper').find('.qty');
        var qty = Number($qty.text());
        console.log(qty);
           if (qty > 0) {
            $qty.text(qty - 1);
            var price = Number($(this).closest('.sub_menu_item_qty_wrapper').closest('.sub_menu_item_details_wrapper').find('.sub_menu_name_price_wrapper').find('.sub_menu_item_price').text());
            total = total-price;
            $("#total").text(total)
            console.log(total);
            }
        
    });
    

});


var total=0;
function calc_total() {

}


//dummy_data();
