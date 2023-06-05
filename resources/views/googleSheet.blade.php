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
            console.log(email)
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
                    drawRadarChart(data);
              
                })
                  .catch(error => {
                     console.error("データの取得に失敗しました", error);
                 });
              
        }
       
        // レーダーチャートを描画する関数
        function drawRadarChart(data) {
            
            console.log(data[1]);
            const answer=data[1];
            const timestamp=answer[0];
            console.log(answer);
            console.log(answer[0]);
            console.log(answer[3]);
            
            //問題解決力
            const problemsolving = answer.slice(2, 17);
            console.log(problemsolving);
            
            //レジリエンス
            const resilience =answer.slice(17,38);
            console.log(resilience);
            
            //問題焦点
            const problemfocus=answer.slice(38,59);
            console.log(problemfocus);
            
            //時間的展望
            const timeperspective=answer.slice(59,76);
            console.log(timeperspective);
            
            //自己認識
            const selfunderstand=answer.slice(77,114);
            console.log(selfunderstand);
            
            //自己肯定感
            const selfesteem=answer.slice(115,147);
            console.log(selfesteem);
            
            //コミュニケーション力
            const communication=answer.slice(148,171);
            console.log(communication);

            const reversedIndices = [22, 23, 29, 30, 31, 32, 62, 63, 65, 67, 70, 71, 72, 74, 75, 76, 86, 87, 94, 95,]

            //問題解決力
            const resultProblemSolving = {};
            for (let i = 0; i < problemsolving.length; i++) {
              const currentQuestion = problemsolving[i];
              if (reversedIndices.includes(i + 2)) {
                if (currentQuestion === "当てはまる") {
                  resultProblemSolving[i + 2] = 1; // 逆転項目なので、"当てはまる"には1を割り当てる
                } else if (currentQuestion === "やや当てはまる") {
                  resultProblemSolving[i + 2] = 3; // 逆転項目なので、"やや当てはまる"には3を割り当てる
                } else if (currentQuestion === "どちらとも言えない") {
                  resultProblemSolving[i + 2] = 5; // 逆転項目なので、"どちらとも言えない"には5を割り当てる
                } else if (currentQuestion === "やや当てはまらない") {
                  resultProblemSolving[i + 2] = 8; // 逆転項目なので、"やや当てはまらない"には8を割り当てる
                } else if (currentQuestion === "当てはまらない") {
                  resultProblemSolving[i + 2] = 10; // 逆転項目なので、"当てはまらない"には10を割り当てる
                }
              } else {
                // 逆転項目以外の場合は通常のスコア割り当てを行う
                if (currentQuestion === "当てはまる") {
                  resultProblemSolving[i + 2] = 10;
                } else if (currentQuestion === "やや当てはまる") {
                  resultProblemSolving[i + 2] = 8;
                } else if (currentQuestion === "どちらとも言えない") {
                  resultProblemSolving[i + 2] = 5;
                } else if (currentQuestion === "やや当てはまらない") {
                  resultProblemSolving[i + 2] = 3;
                } else if (currentQuestion === "当てはまらない") {
                  resultProblemSolving[i + 2] = 1;
                }
              }
              console.log(currentQuestion);
              console.log(resultProblemSolving)
            }
            
        
        // レジリエンス
        const resultResilience = {};
        for (let i = 0; i < resilience.length; i++) {
          const currentQuestion = resilience[i];
          if (reversedIndices.includes(i + 2)) {
            if (currentQuestion === "当てはまる") {
              resultResilience[i + 2] = 1; // 逆転項目なので、"当てはまる"には1を割り当てる
            } else if (currentQuestion === "やや当てはまる") {
              resultResilience[i + 2] = 3; // 逆転項目なので、"やや当てはまる"には3を割り当てる
            } else if (currentQuestion === "どちらとも言えない") {
              resultResilience[i + 2] = 5; // 逆転項目なので、"どちらとも言えない"には5を割り当てる
            } else if (currentQuestion === "やや当てはまらない") {
              resultResilience[i + 2] = 8; // 逆転項目なので、"やや当てはまらない"には8を割り当てる
            } else if (currentQuestion === "当てはまらない") {
              resultResilience[i + 2] = 10; // 逆転項目なので、"当てはまらない"には10を割り当てる
            }
          } else {
            // 逆転項目以外の場合は通常のスコア割り当てを行う
            if (currentQuestion === "当てはまる") {
              resultResilience[i + 2] = 10;
            } else if (currentQuestion === "やや当てはまる") {
              resultResilience[i + 2] = 8;
            } else if (currentQuestion === "どちらとも言えない") {
              resultResilience[i + 2] = 5;
            } else if (currentQuestion === "やや当てはまらない") {
              resultResilience[i + 2] = 3;
            } else if (currentQuestion === "当てはまらない") {
              resultResilience[i + 2] = 1;
            }
          }
        }
        
        //問題焦点
        const resultProblemFocus = {};
        for (let i = 0; i < problemfocus.length; i++) {
          const currentQuestion = problemfocus[i];
              if (reversedIndices.includes(i + 2)) {
                if (currentQuestion === "当てはまる") {
                  resultProblemFocus[i + 2] = 1; // 逆転項目なので、"当てはまる"には1を割り当てる
                } else if (currentQuestion === "やや当てはまる") {
                  resultProblemFocus[i + 2] = 3; // 逆転項目なので、"やや当てはまる"には3を割り当てる
                } else if (currentQuestion === "どちらとも言えない") {
                  resultProblemFocus[i + 2] = 5; // 逆転項目なので、"どちらとも言えない"には5を割り当てる
                } else if (currentQuestion === "やや当てはまらない") {
                  resultProblemFocus[i + 2] = 8; // 逆転項目なので、"やや当てはまらない"には8を割り当てる
                } else if (currentQuestion === "当てはまらない") {
                  resultProblemFocus[i + 2] = 10; // 逆転項目なので、"当てはまらない"には10を割り当てる
                }
              } else {
                // 逆転項目以外の場合は通常のスコア割り当てを行う
                if (currentQuestion === "当てはまる") {
                  resultProblemFocus[i + 2] = 10;
                } else if (currentQuestion === "やや当てはまる") {
                  resultProblemFocus[i + 2] = 8;
                } else if (currentQuestion === "どちらとも言えない") {
                  resultProblemFocus[i + 2] = 5;
                } else if (currentQuestion === "やや当てはまらない") {
                  resultProblemFocus[i + 2] = 3;
                } else if (currentQuestion === "当てはまらない") {
                  resultProblemFocus[i + 2] = 1;
                }
              }
        }
        
        //時間的展望
        const resultTimeperspective = {};
        for (let i = 0; i < resilience.length; i++) {
          const currentQuestion = resilience[i];
          if (reversedIndices.includes(i + 2)) {
            if (currentQuestion === "当てはまる") {
              resultTimeperspective[i + 2] = 1; // 逆転項目なので、"当てはまる"には1を割り当てる
            } else if (currentQuestion === "やや当てはまる") {
              resultTimeperspective[i + 2] = 3; // 逆転項目なので、"やや当てはまる"には3を割り当てる
            } else if (currentQuestion === "どちらとも言えない") {
              resultTimeperspective[i + 2] = 5; // 逆転項目なので、"どちらとも言えない"には5を割り当てる
            } else if (currentQuestion === "やや当てはまらない") {
              resultTimeperspective[i + 2] = 8; // 逆転項目なので、"やや当てはまらない"には8を割り当てる
            } else if (currentQuestion === "当てはまらない") {
              resultTimeperspective[i + 2] = 10; // 逆転項目なので、"当てはまらない"には10を割り当てる
            }
          } else {
            // 逆転項目以外の場合は通常のスコア割り当てを行う
            if (currentQuestion === "当てはまる") {
              resultTimeperspective[i + 2] = 10;
            } else if (currentQuestion === "やや当てはまる") {
              resultTimeperspective[i + 2] = 8;
            } else if (currentQuestion === "どちらとも言えない") {
              resultTimeperspective[i + 2] = 5;
            } else if (currentQuestion === "やや当てはまらない") {
              resultTimeperspective[i + 2] = 3;
            } else if (currentQuestion === "当てはまらない") {
              resultTimeperspective[i + 2] = 1;
            }
          }
        }

        
        
        // 自己認識
        const resultSelfUnderstanding = {};
        for (let i = 0; i < selfunderstand.length; i++) {
          const currentQuestion = selfunderstand[i];
              if (reversedIndices.includes(i + 2)) {
                if (currentQuestion === "当てはまる") {
                  resultSelfUnderstanding[i + 2] = 1; // 逆転項目なので、"当てはまる"には1を割り当てる
                } else if (currentQuestion === "やや当てはまる") {
                  resultSelfUnderstanding[i + 2] = 3; // 逆転項目なので、"やや当てはまる"には3を割り当てる
                } else if (currentQuestion === "どちらとも言えない") {
                  resultSelfUnderstanding[i + 2] = 5; // 逆転項目なので、"どちらとも言えない"には5を割り当てる
                } else if (currentQuestion === "やや当てはまらない") {
                  resultSelfUnderstanding[i + 2] = 8; // 逆転項目なので、"やや当てはまらない"には8を割り当てる
                } else if (currentQuestion === "当てはまらない") {
                  resultSelfUnderstanding[i + 2] = 10; // 逆転項目なので、"当てはまらない"には10を割り当てる
                }
              } else {
                // 逆転項目以外の場合は通常のスコア割り当てを行う
                if (currentQuestion === "当てはまる") {
                  resultSelfUnderstanding[i + 2] = 10;
                } else if (currentQuestion === "やや当てはまる") {
                  resultSelfUnderstanding[i + 2] = 8;
                } else if (currentQuestion === "どちらとも言えない") {
                  resultSelfUnderstanding[i + 2] = 5;
                } else if (currentQuestion === "やや当てはまらない") {
                  resultSelfUnderstanding[i + 2] = 3;
                } else if (currentQuestion === "当てはまらない") {
                  resultSelfUnderstanding[i + 2] = 1;
                }
              }
        }
        
        // 自己肯定感
        const resultSelfEsteem = {};
        for (let i = 0; i < selfesteem.length; i++) {
          const currentQuestion = selfesteem[i];
            if (reversedIndices.includes(i + 2)) {
                if (currentQuestion === "当てはまる") {
                  resultSelfEsteem[i + 2] = 1; // 逆転項目なので、"当てはまる"には1を割り当てる
                } else if (currentQuestion === "やや当てはまる") {
                  resultSelfEsteem[i + 2] = 3; // 逆転項目なので、"やや当てはまる"には3を割り当てる
                } else if (currentQuestion === "どちらとも言えない") {
                  resultSelfEsteem[i + 2] = 5; // 逆転項目なので、"どちらとも言えない"には5を割り当てる
                } else if (currentQuestion === "やや当てはまらない") {
                  resultSelfEsteem[i + 2] = 8; // 逆転項目なので、"やや当てはまらない"には8を割り当てる
                } else if (currentQuestion === "当てはまらない") {
                  resultSelfEsteem[i + 2] = 10; // 逆転項目なので、"当てはまらない"には10を割り当てる
                }
              } else {
                // 逆転項目以外の場合は通常のスコア割り当てを行う
                if (currentQuestion === "当てはまる") {
                  resultSelfEsteem[i + 2] = 10;
                } else if (currentQuestion === "やや当てはまる") {
                  resultSelfEsteem[i + 2] = 8;
                } else if (currentQuestion === "どちらとも言えない") {
                  resultSelfEsteem[i + 2] = 5;
                } else if (currentQuestion === "やや当てはまらない") {
                  resultSelfEsteem[i + 2] = 3;
                } else if (currentQuestion === "当てはまらない") {
                  resultSelfEsteem[i + 2] = 1;
                }
              }
        }
        
       //コミュニケーション力
        const resultCommunication = {};
        for (let i = 0; i < communication.length; i++) {
          const currentQuestion = communication[i];
            if (reversedIndices.includes(i + 2)) {
                if (currentQuestion === "当てはまる") {
                  resultCommunication[i + 2] = 1; // 逆転項目なので、"当てはまる"には1を割り当てる
                } else if (currentQuestion === "やや当てはまる") {
                  resultCommunication[i + 2] = 3; // 逆転項目なので、"やや当てはまる"には3を割り当てる
                } else if (currentQuestion === "どちらとも言えない") {
                  resultCommunication[i + 2] = 5; // 逆転項目なので、"どちらとも言えない"には5を割り当てる
                } else if (currentQuestion === "やや当てはまらない") {
                  resultCommunication[i + 2] = 8; // 逆転項目なので、"やや当てはまらない"には8を割り当てる
                } else if (currentQuestion === "当てはまらない") {
                  resultCommunication[i + 2] = 10; // 逆転項目なので、"当てはまらない"には10を割り当てる
                }
              } else {
                // 逆転項目以外の場合は通常のスコア割り当てを行う
                if (currentQuestion === "当てはまる") {
                  resultCommunication[i + 2] = 10;
                } else if (currentQuestion === "やや当てはまる") {
                  resultCommunication[i + 2] = 8;
                } else if (currentQuestion === "どちらとも言えない") {
                  resultCommunication[i + 2] = 5;
                } else if (currentQuestion === "やや当てはまらない") {
                  resultCommunication[i + 2] = 3;
                } else if (currentQuestion === "当てはまらない") {
                  resultCommunication[i + 2] = 1;
                }
              }
        }        
      
        
          function calculateTotalScore(resultSelfUnderstanding) {
          let total = 0;
          for (const key in resultSelfUnderstanding) {
            total += resultSelfUnderstanding[key];
          }
          return total;
        }
        
         function calculateTotalScore(resultSelfEsteem) {
          let total = 0;
          for (const key in resultSelfEsteem) {
            total += resultSelfEsteem[key];
          }
          return total;
        }
        
         function calculateTotalScore(resultCommunication) {
          let total = 0;
          for (const key in resultCommunication) {
            total += resultCommunication[key];
          }
          return total;
        }
        
         function calculateTotalScore(resultResilience) {
          let total = 0;
          for (const key in resultResilience) {
            total += resultResilience[key];
          }
          return total;
        }
        
         function calculateTotalScore(resultProblemSolving) {
          let total = 0;
          for (const key in resultProblemSolving) {
            total += resultProblemSolving[key];
          }
          return total;
        }
        
         function calculateTotalScore(resultProblemFocus) {
          let total = 0;
          for (const key in resultProblemFocus) {
            total += resultProblemFocus[key];
          }
          return total;
        }
        
         function calculateTotalScore(resultTimeperspective) {
          let total = 0;
          for (const key in resultTimeperspective) {
            total += resultTimeperspective[key];
          }
          return total;
        }
        
        
        //各項目の点数計算
        // 自己認識
        const totalScoreSelfUnderstanding = calculateTotalScore(resultSelfUnderstanding);
        console.log(totalScoreSelfUnderstanding);
        
        // 自己肯定感
        const totalScoreSelfEsteem = calculateTotalScore(resultSelfEsteem);
        console.log(totalScoreSelfEsteem);
        
        //コミュニケーション
        const totalScoreCommunication = calculateTotalScore(resultCommunication);
        console.log(totalScoreCommunication);
        
        //レジリエンス
        const totalScoreResilience = calculateTotalScore(resultResilience);
        console.log(totalScoreResilience);
        
       //問題解決力の計算
        const totalScoreProblemSolving = calculateTotalScore(resultProblemSolving);
        console.log(totalScoreProblemSolving); // 合計スコアの値を表示
        
        // 課題認識力
        const totalScoreProblemFocus = calculateTotalScore(resultProblemFocus);
        console.log(totalScoreProblemFocus);
        
        //時間的展望
        const totalScoreTimePerspective= calculateTotalScore(resultTimeperspective);
        console.log(totalScoreTimePerspective);
        
        //質問の平均点計算
        const Q1result = totalScoreSelfUnderstanding / 33; // 自己認識
        const Q2result = totalScoreSelfEsteem / 38; // 自己肯定感
        const Q3result = totalScoreCommunication / 24; //コミュニケーション
        const Q4result = totalScoreResilience / 22; //レジリエンス
        const Q5result = totalScoreProblemSolving / 15; //問題解決力
        const Q6result = totalScoreProblemFocus / 22; // 課題認識力
        const Q7result = totalScoreTimePerspective / 18; //時間的展望
      
            
            
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
                        label: `${timestamp}`,
                        data: [Q1result,Q2result,Q3result,Q4result,Q5result,Q6result,Q7result],
                        fill: true,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
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