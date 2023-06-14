<x-app-layout>
<head>
    <title>ビジネス力診断</title>
    <!-- Chart.jsのスクリプトを読み込む -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    @auth
    <div class="flex justify-center">
    <input type="hidden" id="email" name="email" value="{{ auth()->user()->email }}">
   <x-primary-button id="fetchData" class="mt-4 mb-4 py-2 px-4 bg-blue-500 text-black rounded-lg">診断結果はこちらをクリック</x-primary-button>

    </div>
     @endauth
        <!--<label for="email">メールアドレス:</label>-->
   

    <canvas id="radarChart"></canvas>
    <script>
        // データ取得用のAjaxリクエストを送信する関数
        function fetchData() {
            const email = document.getElementById('email').value;
            // Ajaxリクエストを送信
            fetch("{{ route('sheet') }}?email=" + email,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
           })
           .then(response => response.json())
                
                .then(data => {
                    // データを取得してレーダーチャートを描画する関数を呼び出す
                    //現時点で複数のデータが取り出されました。
                    drawRadarChart(data);
                })
                  .catch(error => {
                     console.error("データの取得に失敗しました", error);
                 });
        }

        // レーダーチャートを描画する関数
        function drawRadarChart(data) {
              // //チャートを重なるために値を振り直す
              // const timestamp = data[0][0];
              // const timestamp2=data[1][0];


            //それぞれの配列にスライスするに
            const problemsolvings = [];
            const resiliences = [];
            const problemfocuses = [];
            const timeperspectives = [];
            const selfunderstands = [];
            const selfesteems = [];
            const communications = [];

            for (let i = 0; i < 6; i++) {
              //問題解決力
              if (data[i]) {
                const problemsolving = data[i].slice(2, 17);
                problemsolvings.push(problemsolving);
              }
               //レジリエンス
              if (data[i]) {
              const resilience =data[i].slice(17,38);
              resiliences.push(resilience);
              }
               //問題焦点型
              if (data[i]) {
              const problemfocus =data[i].slice(38,59);
              problemfocuses.push(problemfocus);
              }
              //時間的展望
              if (data[i]) {
              const timeperspective =data[i].slice(59,76);
              timeperspectives.push(timeperspective);
              }
              //自己認識
              if (data[i]) {
              const selfunderstand =data[i].slice(77,114);
              selfunderstands.push(selfunderstand);
              }
              //自己肯定感
              if (data[i]) {
              const selfesteem =data[i].slice(115,147);
              selfesteems.push(selfesteem);
              }
              //コミュニケーション力
              if (data[i]) {
              const communication =data[i].slice(148,171);
              communications.push(communication);
              }
            }
   
            
            //逆転項目
            const reversedIndices = [22, 23, 29, 30, 31, 32, 62, 63, 65, 67, 70, 71, 72, 74, 75, 76, 86, 87, 94, 95,]

            //問題解決力
            const resultProblemSolving = {};
            
            for (let i = 0; i < problemsolvings.length; i++) {
              const problemsolving = problemsolvings[i];
              const currentResult = {};
            
              for (let j = 0; j < problemsolving.length; j++) {
                const currentQuestion = problemsolving[j];
            
                if (reversedIndices.includes(j + 2)) {
                  if (currentQuestion === "当てはまる") {
                    currentResult[j + 2] = 1;
                  } else if (currentQuestion === "やや当てはまる") {
                    currentResult[j + 2] = 3;
                  } else if (currentQuestion === "どちらとも言えない") {
                    currentResult[j + 2] = 5;
                  } else if (currentQuestion === "やや当てはまらない") {
                    currentResult[j + 2] = 8;
                  } else if (currentQuestion === "当てはまらない") {
                    currentResult[j + 2] = 10;
                  }
                } else {
                  if (currentQuestion === "当てはまる") {
                    currentResult[j + 2] = 10;
                  } else if (currentQuestion === "やや当てはまる") {
                    currentResult[j + 2] = 8;
                  } else if (currentQuestion === "どちらとも言えない") {
                    currentResult[j + 2] = 5;
                  } else if (currentQuestion === "やや当てはまらない") {
                    currentResult[j + 2] = 3;
                  } else if (currentQuestion === "当てはまらない") {
                    currentResult[j + 2] = 1;
                  }
                }
              }
            
              resultProblemSolving[i] = currentResult;
            }
            
        
          // レジリエンス
           const resultResilience = {};
              
              for (let i = 0; i < resiliences.length; i++) {
                const resilience = resiliences[i];
                const currentResult = {};
              
                for (let j = 0; j < resilience.length; j++) {
                  const currentQuestion = resilience[j];
              
                  if (reversedIndices.includes(j + 2)) {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 1;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 10;
                    }
                  } else {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 10;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 1;
                    }
                  }
                }
              
                resultResilience[i] = currentResult;
              }
            
          
           //問題焦点型
           const resultProblemFocus = {};
              
              for (let i = 0; i < problemfocuses.length; i++) {
                const problemfocus = problemfocuses[i];
                const currentResult = {};
              
                for (let j = 0; j < problemfocus.length; j++) {
                  const currentQuestion = problemfocus[j];
              
                  if (reversedIndices.includes(j + 2)) {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 1;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 10;
                    }
                  } else {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 10;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 1;
                    }
                  }
                }
              
                resultProblemFocus[i] = currentResult;
              }
             
            //時間的展望
             const resultTimeperspective = {};
              
              for (let i = 0; i < timeperspectives.length; i++) {
                const timeperspective = timeperspectives[i];
                const currentResult = {};
              
                for (let j = 0; j < timeperspective.length; j++) {
                  const currentQuestion = timeperspective[j];
              
                  if (reversedIndices.includes(j + 2)) {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 1;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 10;
                    }
                  } else {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 10;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 1;
                    }
                  }
                }
              
                resultTimeperspective[i] = currentResult;
              }
            
       
            // 自己認識
             const resultSelfUnderstanding = {};
              
              for (let i = 0; i < selfunderstands.length; i++) {
                const selfunderstand = selfunderstands[i];
                const currentResult = {};
              
                for (let j = 0; j < selfunderstand.length; j++) {
                  const currentQuestion = selfunderstand[j];
              
                  if (reversedIndices.includes(j + 2)) {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 1;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 10;
                    }
                  } else {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 10;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 1;
                    }
                  }
                }
                resultSelfUnderstanding[i] = currentResult;
              }
             
            // 自己肯定感
            const resultSelfEsteem = {};
              
              for (let i = 0; i < selfesteems.length; i++) {
                const selfesteem = selfesteems[i];
                const currentResult = {};
              
                for (let j = 0; j < selfesteem.length; j++) {
                  const currentQuestion = selfesteem[j];
              
                  if (reversedIndices.includes(j + 2)) {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 1;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 10;
                    }
                  } else {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 10;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 1;
                    }
                  }
                }
                resultSelfEsteem[i] = currentResult;
              }
             
        
            //コミュニケーション力
            const resultCommunication = {};
              
              for (let i = 0; i < communications.length; i++) {
                const communication = communications[i];
                const currentResult = {};
              
                for (let j = 0; j < communication.length; j++) {
                  const currentQuestion = communication[j];
              
                  if (reversedIndices.includes(j + 2)) {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 1;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 10;
                    }
                  } else {
                    if (currentQuestion === "当てはまる") {
                      currentResult[j + 2] = 10;
                    } else if (currentQuestion === "やや当てはまる") {
                      currentResult[j + 2] = 8;
                    } else if (currentQuestion === "どちらとも言えない") {
                      currentResult[j + 2] = 5;
                    } else if (currentQuestion === "やや当てはまらない") {
                      currentResult[j + 2] = 3;
                    } else if (currentQuestion === "当てはまらない") {
                      currentResult[j + 2] = 1;
                    }
                  }
                }
                resultCommunication[i] = currentResult;
              }
              
          
          function calculateTotalScore(resultSelfUnderstanding) {
            let totals = [];
          
            for (const key in resultSelfUnderstanding) {
              const currentResult = resultSelfUnderstanding[key];
              let total = 0;
          
              for (const subKey in currentResult) {
                total += currentResult[subKey];
              }
          
              totals.push(total);
            }
            return totals;
          }

              
          function calculateTotalScore(resultSelfEsteem) {
            let totals = [];
          
            for (const key in resultSelfEsteem) {
              const currentResult = resultSelfEsteem[key];
              let total = 0;
          
              for (const subKey in currentResult) {
                total += currentResult[subKey];
              }
          
              totals.push(total);
            }
            return totals;
          }
        
        
        
        function calculateTotalScore(resultCommunication) {
            let totals = [];
          
            for (const key in resultCommunication) {
              const currentResult = resultCommunication[key];
              let total = 0;
          
              for (const subKey in currentResult) {
                total += currentResult[subKey];
              }
          
              totals.push(total);
            }
            return totals;
          } 
        
        function calculateTotalScore(resultResilience) {
            let totals = [];
          
            for (const key in resultResilience) {
              const currentResult = resultResilience[key];
              let total = 0;
          
              for (const subKey in currentResult) {
                total += currentResult[subKey];
              }
          
              totals.push(total);
            }
            return totals;
          } 
          
        function calculateTotalScore(resultProblemSolving) {
            let totals = [];
          
            for (const key in resultProblemSolving) {
              const currentResult = resultProblemSolving[key];
              let total = 0;
          
              for (const subKey in currentResult) {
                total += currentResult[subKey];
              }
          
              totals.push(total);
            }
            return totals;
          }   
        
        function calculateTotalScore(resultProblemFocus) {
            let totals = [];
          
            for (const key in resultProblemFocus) {
              const currentResult = resultProblemFocus[key];
              let total = 0;
          
              for (const subKey in currentResult) {
                total += currentResult[subKey];
              }
          
              totals.push(total);
            }
            return totals;
          } 
        
        function calculateTotalScore(resultTimeperspective) {
            let totals = [];
          
            for (const key in resultTimeperspective) {
              const currentResult = resultTimeperspective[key];
              let total = 0;
          
              for (const subKey in currentResult) {
                total += currentResult[subKey];
              }
          
              totals.push(total);
            }
            return totals;
          } 
          

        //各項目の点数計算
        // 自己認識
        const totalScoreSelfUnderstanding = calculateTotalScore(resultSelfUnderstanding);
        
        // 自己肯定感
        const totalScoresSelfEsteem = calculateTotalScore(resultSelfEsteem);
        
        //コミュニケーション
        const totalScoresCommunication = calculateTotalScore(resultCommunication);

        //レジリエンス
        const totalScoresResilience = calculateTotalScore(resultResilience);
        
       //問題解決力の計算
        const totalScoresProblemSolving = calculateTotalScore(resultProblemSolving);
        
        // 課題認識力
        const totalScoresProblemFocus = calculateTotalScore(resultProblemFocus);
        
        //時間的展望
        const totalScoresTimePerspective= calculateTotalScore(resultTimeperspective);
        
        //質問の平均点計算
        const Q1results = totalScoreSelfUnderstanding.map(totalScore => totalScore /33 ); // 自己認識
        const Q2results = totalScoresSelfEsteem.map(totalScore => totalScore / 38); // 自己肯定感
        const Q3results = totalScoresCommunication.map(totalScore => totalScore/ 24); //コミュニケーション
        const Q4results = totalScoresResilience.map(totalScore => totalScore/ 22) ; //レジリエンス
        const Q5results = totalScoresProblemSolving.map(totalScore => totalScore/ 15); //問題解決力
        const Q6results = totalScoresProblemFocus.map (totalScore => totalScore/ 22); // 課題認識力
        const Q7results = totalScoresTimePerspective.map(totalScore => totalScore / 18); //時間的展望
   
              const array = [['未受講', 0, 0, 0, 0, 0, 0, 0], ['未受講', 0, 0, 0, 0, 0, 0, 0], ['未受講', 0, 0, 0, 0, 0, 0, 0], ['未受講', 0, 0, 0, 0, 0, 0, 0], ['未受講', 0, 0, 0, 0, 0, 0, 0]];

              for (let i = 0; i < 5; i++) {
                if (data[i] && data[i][0]) {
                  array[i][0] = data[i][182];
                }
                if (data[i] && data[i][0]) {
                  array[i][1] = Q1results[i]; 
                }
                if (data[i] && data[i][0]) {
                  array[i][2] = Q2results[i]; 
                }
                if (data[i] && data[i][0]) {
                  array[i][3] = Q3results[i]; 
                }
                if (data[i] && data[i][0]) {
                  array[i][4] = Q4results[i];
                }
                if (data[i] && data[i][0]) {
                  array[i][5] = Q5results[i]; 
                }
                if (data[i] && data[i][0]) {
                  array[i][6] = Q6results[i];
                }
                if (data[i] && data[i][0]) {
                  array[i][7] = Q7results[i];
                }
                }
            
            const canvas = document.getElementById('radarChart');

            new Chart
            (canvas, {
                type: 'radar',
                data: {
                    labels: [
                    '自己認識', 
                    '自己肯定感', 
                    'コミュニケーション力', 
                    'レジリエンス', 
                    '問題解決力', 
                    '課題認識力', 
                    '時間的展望'
                    ],
                    datasets: [{
                        label: `${array[0][0]}`,
                        data: [`${array[0][1]}`,`${array[0][2]}`,`${array[0][3]}`,`${array[0][4]}`,`${array[0][5]}`,`${array[0][6]}`,`${array[0][7]}`],
                        fill: true,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: `${array[1][0]}`,
                        data: [`${array[1][1]}`,`${array[1][2]}`,`${array[1][3]}`,`${array[1][4]}`,`${array[1][5]}`,`${array[1][6]}`,`${array[1][7]}`],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1
                    },
                    {
                        label: `${array[2][0]}`,
                        data: [`${array[2][1]}`,`${array[2][2]}`,`${array[2][3]}`,`${array[2][4]}`,`${array[2][5]}`,`${array[2][6]}`,`${array[2][7]}`],
                        fill: true,
                        backgroundColor: 'rgba(235, 127, 54, 0.2)',
                        borderColor: 'rgb(235, 127, 54)',
                        borderWidth: 1
                    },
                    {
                        label: `${array[3][0]}`,
                        data: [`${array[3][1]}`,`${array[3][2]}`,`${array[3][3]}`,`${array[3][4]}`,`${array[3][5]}`,`${array[3][6]}`,`${array[3][7]}`],
                        fill: true,
                        backgroundColor: 'rgba(156, 168, 0, 0.2)',
                        borderColor: 'rgb(156, 168, 0)',
                        borderWidth: 1
                    },
                    {
                        label: `${array[4][0]}`,
                        data: [`${array[4][1]}`,`${array[4][2]}`,`${array[4][3]}`,`${array[4][4]}`,`${array[4][5]}`,`${array[4][6]}`,`${array[4][7]}`],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }
        

        // データ取得ボタンのクリックイベントを設定
        document.getElementById('fetchData').addEventListener('click', fetchData);
    </script>
</body>
</x-app-layout>