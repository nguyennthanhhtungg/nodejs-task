require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const categoryRouter = require('./components/category');
const customerRouter = require('./components/customer');
const employeeRouter = require('./components/employee');
const extraFeeRouter = require('./components/extraFee');
const orderRouter = require('./components/order');
const orderDetailRouter = require('./components/orderDetail');
const productRouter = require('./components/product');
const supplierRouter = require('./components/supplier');

const app = express();

app.use(morgan('dev'));

app.use('/category', categoryRouter);
app.use('/customer', customerRouter);
app.use('/employee', employeeRouter);
app.use('/extraFee', extraFeeRouter);
app.use('/order', orderRouter);
app.use('/orderDetail', orderDetailRouter);
app.use('/product', productRouter);
app.use('/supplier', supplierRouter);

module.exports = app;
