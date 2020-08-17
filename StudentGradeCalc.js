<!DOCTYPE html>
<html>
<head>
	<title>Student Grades</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
 	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

    <style type="text/css">

    	body{
    		background-image: url(../myfolder/pastel.jpg);
    		width: 100%;
		    height: 650px;
		    background-size: 100% 100%;
            background-attachment: fixed;
            font-weight: bold;
    	
    	}
    	.marks{
    		margin-top: -25%;
    		width:600px;
    		height: 340px;
    		margin-left: 40%;
    	 
    		background-color:  #ffccf9;
    		margin-right: 15%;
    		font-family: monospace;
    		
    		
    	}
    	.s1{
    		margin-left: 45%;
    		margin-top: -23%;
    		font-size: 20px;
    	}
    </style>
</head>
<body>
	<div class="card" style="width:290px; height:400px; margin-left: 4%; margin-top: 2%; background-color: #dcd3ff">
    <img class="card-img-top" src="avatar.png" alt="Card image" style="width:80%; padding-top: 5%; padding-left: 15%;">
    <div class="card-body">
      <h4 class="card-title">Jasie Doe</h4>
      <p class="card-text">JavaSript learner, web development enhusiast.</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
</div>
	<div class="container marks">
		
		<div class="row">
			<div class="col-md-6">
				<h3 style="  color: black; font-weight: bolder; font-size: 27px; margin-top: 10%;">Student Marks</h3>
				<p style="font-size: 19px;">Enter your marks for all subjects specified and grades will be generated.</p>

				
			</div>
			<div class="col-md-6 s1">
				<input type="text" id="En" placeholder="English Marks"><br>
				<input type="text" id="Java" placeholder="Java marks"><br>
				<input type="text" id="Auto" placeholder="Auto marks"><br>
				<input type="text" id="C" placeholder="C marks"><br><br>

				<input type="button" id="btn" class="btn btn-primary" value="Calculate" onclick="calcy()">
			</div>


		</div><br>
		<div id="comb" style="text-align: center; font-family: monospace; font-size: 20px;"></div>
	</div>

	<script type="text/javascript">
		function calcy(){
			let e=document.getElementById("En").value;
			let J=document.getElementById("Java").value;
			let A=document.getElementById("Auto").value;
			let c=document.getElementById("C").value;

			var total=parseFloat(e) + parseFloat(J) + parseFloat(A) + parseFloat(c);
			 

			var perc= (total/400)*100;
			 

		    var grades='';
		    if(perc<=100 && perc>=80){
		    	grades='A';
		    }else if(perc<=79 && perc>=60){
		    	grades='B';
		    }else if(perc<=59 && perc>=40){
		    	grades="C";
		    }else{
		    	grades="fail";
		    }
  


		    document.getElementById("comb").innerHTML=`Your total marks are ${total} out of 400 and grade is ${grades}. <br> Your percentage is ${perc}%. `
		}
		
	</script>


</body>
</html>