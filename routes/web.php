<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleSheetsController;


// Route::get('/', function () {
//     return view('auth.register');
// });

Route::get('/', function () {
    return view('test');
});

Route::get('/google-sheets-data', [GoogleSheetsController::class, 'getData'])
->middleware(['auth', 'verified'])->name('sheet');
    
Route::get('/dashboard', function () {
    return view('googleSheetVer2');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
