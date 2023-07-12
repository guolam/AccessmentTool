<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ビジネス力診断</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
   <link rel="stylesheet" href="{{ asset('assets/css/questionnaire.css') }}"> 
   <script src="{{ asset('assets/js/questionnaire.js') }}"></script>
  <!--<link rel="stylesheet" href="questionnaire.css">-->
  <!--<script src="questionnaire.js"></script>-->
</head>

<body>

  <div class="progress-bar">
    <div class="progress" id="progress"></div>
    <div class="progress-marker"></div>
    <h4 class="progress-percentage" id="progressPercentage"></h4>
  </div>

  <div class="quiz-main-inner" id="quizContainer"></div>
  <div class="center-align">
    <button id="submitButton" class="button center-align hidden">送信</button>
  </div>

</body>

</html>