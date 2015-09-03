

var FirstQuestion = new Object();
var SecondQuestion = new Object();
var ThirdQuestion = new Object();
var FourQuestion = new Object();

FirstQuestion.question = "Major Co. reported 2013 income of $300,000 from continuing operations before income taxes and a before-tax extraordinary loss of $80,000. All income is subject to a 30% tax rate. In the 2013 income statement, Major Co. would show the following line-item amounts for income tax expense and net income: ";
FirstQuestion.Option1 = "$90,000 and $154,000.";
FirstQuestion.Option2 = "$66,000 and $210,000.";
FirstQuestion.Option3 = "$90,000 and $276,000.";
FirstQuestion.Option4 = "$66,000 and $220,000.";

SecondQuestion.question = "Cal's Cookies reported 2013 before-tax income before extraordinary items of $152,000 and a before-tax extraordinary loss of $32,000. All tax items are subject to a 30% tax rate. In its 2013 income statement, Cal's reported the following amounts as separate line items for net income and income tax expense: ";
SecondQuestion.Option1 = "$84,000 and $45,600.";
SecondQuestion.Option2 = "$120,000 and $36,000.";
SecondQuestion.Option3 = "$84,000 and $36,000.";
SecondQuestion.Option4 = "$120,000 and $45,600.";


ThirdQuestion.question = "Tropical Tours reported revenue of $400,000 for its year ended December 31, 2013. Accounts receivable at December 31, 2012 and 2013, were $35,000 and $32,000, respectively. Using the direct method for reporting cash flows from operating activities, Tropical Tours would report cash collected from customers of:";
ThirdQuestion.Option1 = "$403,000.";
ThirdQuestion.Option2 = "$400,000.";
ThirdQuestion.Option3 = "$397,000.";
ThirdQuestion.Option4 = "$365,000.";

FourQuestion.question = "Hong Kong Clothiers reported revenue of $5,000,000 for its year ended December 31, 2013. Accounts receivable at December 31, 2012 and 2013, were $320,000 and $355,000, respectively. Using the direct method for reporting cash flows from operating activities, Hong Kong Clothiers would report cash collected from customers of: ";
FourQuestion.Option1 = "$4,965,000.";
FourQuestion.Option2 = "$5,000,000.";
FourQuestion.Option3 = "$5,035,000.";
FourQuestion.Option4 = "$5,045,000.";



FirstQuestion.Answer = "$90,000 and $154,000."; 



$(document).ready(function(){
		$('.mybutton').click(function() {
		 		if ($("#questiontext").text() == FirstQuestion.question) {
		 			if($('input[name="radio"]:checked').val() == "1") {
		 				$(".header").css('background-color', '#6799FF');
						$(".header").children("h3").text('Correct! You are so smart.');
		 			} else {
		 				$(".header").css('background-color', '#E52854');
						$(".header").children("h3").text('Not right fluffy.');
		 			}
		 		} else if ($("#questiontext").text() == SecondQuestion.question) {
		 			if($('input[name="radio"]:checked').val() == "1") {
		 				$(".header").css('background-color', '#6799FF');
						$(".header").children("h3").text('Correct! You are so smart.');
		 			} else {
		 				$(".header").css('background-color', '#E52854');
						$(".header").children("h3").text('Not right fluffy.');
		 			}
		 		}
    	
		})

		$('#question1').click(function() {
				$('#questiontext').text(FirstQuestion.question);
				$('#question1').css('background-color', '#6799FF');
				$('#question2').css('background-color', '#E6E7E8');
				$('#question3').css('background-color', '#E6E7E8');
				$('#question4').css('background-color', '#E6E7E8');

				$('.option1 > label').text(FirstQuestion.Option1);
				$('.option2 > label').text(FirstQuestion.Option2);
				$('.option3 > label').text(FirstQuestion.Option3);
				$('.option4 > label').text(FirstQuestion.Option4);

				$(".header").css('background-color', '#E6E7E8');
				$(".header").children("h3").text('');
		})

		$('#question2').click(function() {
				$('#questiontext').text(SecondQuestion.question);
				$('#question2').css('background-color', '#6799FF');
				$('#question1').css('background-color', '#E6E7E8');
				$('#question3').css('background-color', '#E6E7E8');
				$('#question4').css('background-color', '#E6E7E8');

				$('.option1 > label').text(SecondQuestion.Option1);
				$('.option2 > label').text(SecondQuestion.Option2);
				$('.option3 > label').text(SecondQuestion.Option3);
				$('.option4 > label').text(SecondQuestion.Option4);

				$(".header").css('background-color', '#E6E7E8');
				$(".header").children("h3").text('');

		})

		$('#question3').click(function() {
				$('#questiontext').text(ThirdQuestion.question);
				$('#question3').css('background-color', '#6799FF');
				$('#question2').css('background-color', '#E6E7E8');
				$('#question1').css('background-color', '#E6E7E8');
				$('#question4').css('background-color', '#E6E7E8');
				
				$('.option1 > label').text(ThirdQuestion.Option1);
				$('.option2 > label').text(ThirdQuestion.Option2);
				$('.option3 > label').text(ThirdQuestion.Option3);
				$('.option4 > label').text(ThirdQuestion.Option4);

				$(".header").css('background-color', '#E6E7E8');
				$(".header").children("h3").text('');


		});

		$('#question4').click(function() {
				$('#questiontext').text(FourQuestion.question);
				$('#question4').css('background-color', '#6799FF');
				$('#question2').css('background-color', '#E6E7E8');
				$('#question3').css('background-color', '#E6E7E8');
				$('#question1').css('background-color', '#E6E7E8');
		
				$('.option1 > label').text(FourQuestion.Option1);
				$('.option2 > label').text(FourQuestion.Option2);
				$('.option3 > label').text(FourQuestion.Option3);
				$('.option4 > label').text(FourQuestion.Option4);

				$(".header").css('background-color', '#E6E7E8');
				$(".header").children("h3").text('');

		});
});





