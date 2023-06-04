<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google_Client;
use Google_Service_Sheets;
use App\Http\Controllers\GoogleSheetsController;

class GoogleSheetsController extends Controller
{
    public function getData(Request $request)

    {
        
        $client = new Google_Client();
        $key_file = storage_path('app/public/credential.json'); // サービスキーのjsonファイル
        $client->setAuthConfig($key_file);
        $client->setScopes([
            'https://www.googleapis.com/auth/spreadsheets'
        ]);

        //スプレッドシート取得--------------------
        $sheetId = '14ioGckdPt2-B1w8YD3ydnNvLxOjsgU_MQK79eJHy1eI';
        
        $sheetService = new Google_Service_Sheets($client);
        $range = 'Sheet1'; // 取得する範囲(今回はSheet1の内容全てを取得)
        //$range = 'A1:H10';  //セルの範囲を指定することもできる(A1からH10までのデータ)
        //$range = 'Sheet1:A1:H10'; // 複数条件(Sheet1でA1からH10までのデータ)
        
        $response = $sheetService->spreadsheets_values->get($sheetId, $range);
        $values = $response->getValues();//データを配列で取得
    

        return response()->json($values);
        // return response()->view('googleSheet',compact('values'));
        // return view('googleSheet')->with('values', $values);
        // console.log($values);
        
        // $client = new Google_Client();
        // $client->setApplicationName("Laravel");
        // $client->setDeveloperKey("68be40ccbe3f7354c36b710d43e54efeec7fa5e4");
        
        // return $client();
        
        // $service = new Google_Service_Sheets($client);
        
        // $spreadsheetId = "1ml44HFe1tGhl7_eJgIbB4EQjDusAami3gRUTA64zdps";
        // $range = "Sheet1!A1:AU1";
        
        // $response = $service->spreadsheets_values->get($spreadsheetId, $range);
        // $values = $response->getValues();
        
        // return $values;
    }
    
        // {
    //     // メールアドレスの取得
    //     $email = $request->input('email');

    //     // Google APIクライアントの設定
    //     $client = new Google_Client();
    //     $client->useApplicationDefaultCredentials();
    //     $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
    //     $client->setAccessType('offline');




    //     // return $client();
        
        

    //     // Google Sheets APIクライアントの作成
    //     $service = new Google_Service_Sheets($client);

    //     // スプレッドシートIDとシート名の設定
    //     $spreadsheetId = '1ml44HFe1tGhl7_eJgIbB4EQjDusAami3gRUTA64zdps';
    //     $sheetName = 'フォームの回答 1';

    //     // データの取得
    //     $response = $service->spreadsheets_values->get($spreadsheetId, $sheetName);
    //     $values = $response->getValues();

    //     // メールアドレスで一致するデータのフィルタリング
    //     $filteredData = collect($values)->where('メールアドレスのカラムインデックス', $email)->first();

    //     // レスポンスの返却
    //     return response()->json($filteredData);
    // }
}
