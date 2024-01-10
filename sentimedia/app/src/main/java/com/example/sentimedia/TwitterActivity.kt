package com.example.sentimedia

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.sentimedia.databinding.ActivityTwitterBinding

class TwitterActivity : AppCompatActivity() {
    private lateinit var binding: ActivityTwitterBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityTwitterBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val linkTwitter = binding.etTwitter.text.toString()
    }
}