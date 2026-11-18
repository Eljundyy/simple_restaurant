const { Category } = require("../models");

exports.getAllCategories = (req, res) => {
    //menampilkan waktu request
    console.log(`Request Time: ${req.requestTime}`);

res.status(200).json({
    status: "success",
    data: [
        {
            id:1,
            name: "Appetizers"
        },
        {
            id:2,
            name: "Main Courses"}
    ]
});
}

exports.storeCategory = async (req, res) => {
    
    try {
        let { name, description } = req.body;

        const newCategory = await Category.create({
            nama: name,
            deskripsi: description
        });

        res.status(201).json({
            status: "success",
            data: newCategory
        });
    } catch (error) {
        return res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
};