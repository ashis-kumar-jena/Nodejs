const fs=require("fs");

/*
//Read The Data asynchronously
fs.readFile("demo.txt",(err,res)=>{
    if(err)throw err;
    else{
        console.log(res.toString());
    }
});

//Read the Data Synchronously
const res =fs.readFileSync("demo.txt");
console.log(res.toString());

//Write the data asynchronously
fs.writeFile("demo.txt","Hello",(err)=>{
    if(err)throw err;
    else{
        console.log("Write Operation Success");
    }
});

//Write the data Synchronously
fs.writeFileSync("demo.txt","Welcome");
console.log("data written successfully!!!");

//append the data asynchronously
fs.appendFile("demo.txt"," Nodejs",(err)=>{
    if(err) throw err;
    else{
        console.log("data appended successfully!!!");
    }
})*/

fs.appendFileSync("demo.txt","Hello");
console.log("data appended synchronously");

//openFile  asynchronously
fs.open("new.txt","r+",(err,fd)=>{
    if(err) throw err;
    else{
        console.log("file renamed successfully!!!");
        //rename the file asynchronously
        fs.rename("demo.txt","new.txt",(err)=>{
            if(err) throw err;
            else{
                console.log("file renamed successfully");

                //read Operation
                fs.readFile("new1.txt",(err,res)=>{
                    if(err) throw err;
                    else{
                        console.log(res.toString);
                        console.log("data read successful");

                    //write the data
                    fs.writeFile("new1.txt","This is the File System",(err,result)=>{
                        if(err) throw err;
                        else{
                            console.log("data write successfully");
                        //truncate operation
                        fs.truncate("new1.txt",10,(err)=>{
                            if(err) throw err;
                            else{
                                console.log("truncate operation success");

                        //close the file
                        fs.close(fd,(err)=>{
                            if(err) throw err;
                            else{
                                console.log("file closed successfully");
                                //delete the file
                                fs.unlink("new1.txt",(err)=>{
                                    if(err) throw err;
                                    else{
                                        console.log("file deleted successfully!!!");
                                    }
                                })
                            }
                        })
                            }
                        });
                        }
                    })
                    }
                })
            }
        });

    }
});