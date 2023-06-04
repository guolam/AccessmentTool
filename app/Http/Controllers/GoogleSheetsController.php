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
        $range = 'Sheet1'; 
        
        $response = $sheetService->spreadsheets_values->get($sheetId, $range);
        $values = $response->getValues();//データを配列で取得
    

        return response()->json($values);
    }
}
