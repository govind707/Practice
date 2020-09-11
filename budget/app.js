//Budget control
var budgetController = (function(){
   var Expense = function(id,description,value){
       this.id = id;
       this.description = description;
       this.value = value;
   };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum = sum + cur.value;
        });
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;
            // create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id+1;
            } else{
                ID = 0;
            }
            
            //create new item based on 'inc'/'exp'
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if( type=== 'inc'){
                newItem = new Income(ID, des, val);
            }
            // push it into our data structure
            data.allItems[type].push(newItem);

            return newItem;
        },

        calculateBudget: function(){
            calculateTotal('exp');
            calculateTotal('inc');

            data.budget = data.totals.inc - data.totals.exp;


            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc ) *100);

            }else{
                percentage = -1;
            }
            
         },

        deleteItem: function(type,id){

            data.allItems[type].map(function(curr){
                return curr.id;
            });

            index = ids.indexOf(id);

            if (index !== -1){
                data.allItems[type].splice(index,1);
            }

        },

        getBudget: function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.totals.percentage
            };
        }
    };


})();

// UI control
var UIcontroller = function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    };

    return {
        getInput : function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj,type){

            // create Html string with placeholder text
            if ( type === 'inc'){
                element = DOMstrings.incomeContainer
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div> </div>'
            
            }else if (type === 'exp'){
                element = DOMstrings.expensesContainer
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // replace the placeholder text with some actual data

            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%',obj.value);
            newHtml = newHtml.replace('%percentage%',obj.percentage);

            //insert the html into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

        },

        deleteListItem: function(selectorID){

            var el; 
            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },
        
        clearField: function() {

            var fields, fieldsArr;
 
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){

                current.value = "";

            });

            fieldsArr[0].focus();
            
        },

        displayBudget: function(obj){

            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
   
        },

        getDOMstrings: function() {
            return DOMstrings;
        }   
    };
}();

// Global App control

var controller = (function(budgetctrl, UIctrl){

    var setupEventListners = function(){
        
        var DOM = UIctrl.getDOMstrings();
        document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress', function(event){
            
            if(event.keyCode === 13 || event.which === 13){
                

                    ctrlAddItem();

            }
        });

        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem(event));
    };
    
    var updateBudget = function(){
        // calc the budget
        budgetctrl.calculateBudget();


        //return budget

        var budget= budgetctrl.getBudget();

        // display budget on UI

        UIctrl.displayBudget(budget);
    }
    

    var ctrlAddItem = function(){

        var input, newItem;
   
        // Get the field input data

        input = UIctrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            // Add the item to the budget controller

            newItem = budgetctrl.addItem(input.type,input.description,input.value);

            // Add the item to the UI

            UIctrl.addListItem(newItem, input.type);

            //clear fields

            UIctrl.clearField();

            // caculate the budget

            updateBudget();

            // Display the budget on the UI
 
        }

        var ctrlDeleteItem = function(event){

            var itemID,ID;
            
            itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
            
            if (itemID){
                splitID = itemID.split('-');
                type = splitID[0];
                ID = splitID[1];

                //dlt item frm data structure

                ID = parseFloat(ID);

                budgetctrl.ctrlDeleteItem(type, ID);

                // dlt the item frm UI

                UIctrl.deleteListItem(itemID);

                // update and show new budget

                updateBudget();

            }
        };


        
    };
    return {
        init: function() {
            console.log("App has started");
            setupEventListners();
        }
    };

})(budgetController,UIcontroller);

controller.init();