var transactions=[{id: 102, date: 21, month: "Jan", year: 2017, category: "food", place: "safeway", amount: 20.05},
    {id: 103, date: 1, month: "Mar", year: 2017, category: "personal", place: "clips", amount: 44.25},
    {id: 201, date: 03, month: "Mar", year: 2017, category: "transport", place: "chevron", amount: 23.30},
    {id: 303, date: 24, month: "Apr", year: 2017, category: "entertainment", place: "AMC", amount: 19.23},
    {id: 107, date: 14, month: "Jul", year: 2017, category: "food", place: "safeway", amount: 5.35},
    {id: 109, date: 19, month: "Aug", year: 2017, category: "food", place: "FoodLion", amount: 20},
    {id: 203, date: 20, month: "Oct", year: 2017, category: "transport", place: "chevron", amount: 120.05}
    ]
var idTracker = 0;
var expenses = 0;



module.exports = {
    post: (req, res)=> {
        transactions.push({
            id: idTracker, 
            date: req.body.date,
            month: req.body.month,
            year: req.body.year,
            category: req.body.category||'food',
            place: req.body.place|| ' ',
            amount: req.body.amount || 0,
        })
        idTracker++;
        // savings=income-expenses
        res.status(200).send(transactions)
    },
    
    get: (req,res)=> {
        transactions.forEach(elem=>expenses+=elem.amount)
        if (req.query.month)
        {
            let subTransactions = transactions.filter(tran=>tran.month==req.query.month)
            res.status(200).send({transactions: subTransactions})
        }
        else
        {
            res.status(200).send({transactions: transactions, expenses: expenses})
        }
    },

    update: (req, res)=>{
        const transIndex =  transactions.findIndex(trans=>trans.id==req.params.id);
        transactions[transIndex]={
            id: req.params.id,
            date: transactions[transIndex].date,
            month: transactions[transIndex].month,
            year: transactions[transIndex].year,
            category: transactions[transIndex].category,
            place: req.body.place||transactions[transIndex].place,
            amount: transactions[transIndex].amount,
            };
            res.status(200).send(transactions);
    },

    delete: (req,res) => {
        const transIndex =  transactions.findIndex(trans=>trans.id==req.params.id);
        transactions.splice(transIndex,1);
        res.status(200).send(transactions);
    }
}