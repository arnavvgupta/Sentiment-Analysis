package com.example.sentimedia

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.core.content.ContextCompat
import com.example.sentimedia.databinding.ActivityGraphBinding
import com.example.sentimedia.databinding.ActivityGraphinstBinding

class graphinst : AppCompatActivity() {
    private lateinit var binding: ActivityGraphinstBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityGraphinstBinding.inflate(layoutInflater)
        setContentView(binding.root)

        
    }
}