<x-app-layout>
<head>
    <title>Google Sheets Radar Chart</title>
    <!-- Chart.jsのスクリプトを読み込む -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div>
        <label for="email">メールアドレス:</label>
        <input type="text" id="email" name="email">
        <button id="fetchData">データ取得</button>
    </div>

    <canvas id="radarChart"></canvas>

    <script>
        // データ取得用のAjaxリクエストを送信する関数
        function fetchData() {
            const email = document.getElementById('email').value;

            // Ajaxリクエストを送信
            fetch("{{ route('sheet') }}?email=" + email)
                .then(data => {
                    // データを取得してレーダーチャートを描画する関数を呼び出す
                    drawRadarChart(data);
                    console.log(data);
                })
                .catch(error => {
                    console.error("データの取得に失敗しました", error);
                });
        }
        
      

        // レーダーチャートを描画する関数
        function drawRadarChart(data) {
            const canvas = document.getElementById('radarChart');

            new Chart(canvas, {
                type: 'radar',
                data: {
                    labels: ['問題の解決方法を考えるとき、いくつもの方法を考える', '問題に直面したとき、周囲の環境要因についても分析する', '決断をするとき、いくつかの選択肢を比較検討する', '新しい状況で問題が生じても解決できる自信がある', '色々なことにチャレンジするのが好きだ'],
                    datasets: [{
                        label: 'データ',
                        data: data,
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