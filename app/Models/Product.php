<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'active',
    ];

    protected $casts = [
        'active' => 'boolean',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $appends = ['encrypted_id'];

    public function getEncryptedIdAttribute()
    {
        return Crypt::encrypt($this->id);
    }
}
