const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    tableId: { type: Number, required: true },
    products: [
        {
         productId: { type: String },
         quantity: { type: Number, default: 1 },
        },
    ],
    amount: { type: Number, required: true },
    status:{type:String,default:'Pending',required:true}
}, { timestamps: true });

mongoose.models = {};

export default mongoose.model("Order",OrderSchema)
