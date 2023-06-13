<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Google_Client;
use Google_Service_Sheets;
use App\Http\Controllers\GoogleSheetsController;


class GoogleSheetsController extends Controller
{
    public function getData(Request $request)

    {
        $email = Auth::user()->email;
    
        
        $client = new Google_Client();
        $key_file = storage_path('app/private/credential.json'); 
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

        // emailを照合して該当するデータを選択
        $filteredData = array_filter($values, function ($row) use ($email) {
            return $row[1] === $email;
        });

        $filteredDataWithKeys = array_values($filteredData); // 添字を保持するために配列のキーを再設定
        return response()->json($filteredDataWithKeys);
     
    }
}
