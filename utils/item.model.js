import mongoose from "mongoose";

export const itemSchema =  mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: false},
        price: {
            type: Number,
            default: 0}
    },
    {
    timestamps: true
    }
);

export default mongoose.model("item", itemSchema);
