<html>
    <head>
		<title>Fancify Shamcify</title>

		<!-- link to your script file here -->
		<link rel="stylesheet" href="styles.css">
		<script src="script.js"></script>
		
	</head>

	<body>
		<h1>Fancify my Text</h1>
		<div class="container">
			<fieldset class="box" id="textField">

				<div class="row">
					<div></div>
				</div>
				<label for="Text" >Text</label>
				<textarea id="textbox" rows="4" cols="30"></textarea><br>


			</fieldset>

			<fieldset class="box">
				<legend>Fancify</legend>
				<input type="button" value="Bigger!" onclick="biggerText()"><br>


				<label for="fancyShmancy">FancyShmancy</label>
				<input type="radio" id="fancyShmancy" name="radios" onclick="fancyShmancy()" onchange="changeButton()"><br>


				<label for="boringBetty">BoringBetty</label>
				<input type="radio" id="boringBetty" name="radios" onclick="boringBetty()" onchange="changeButton()" checked><br>


				<input type="button" value="Moo!" onclick="toUpper()"><br>
			</fieldset>
		</div>
	</body>
</html>