package com.example.sentimedia

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import com.example.sentimedia.databinding.ActivityInstaBinding

class InstActivity : AppCompatActivity() {
    private lateinit var binding : ActivityInstaBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityInstaBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val linkInsta = binding.etInsta.text.toString()
        val msg = "Please wait while we process your request..."

        val handler = Handler(Looper.getMainLooper())

        binding.btnAnalyzeInsta.setOnClickListener {
            val initialDelay = 10000
            binding.textView2.text = msg
            handler.postDelayed({
                Intent(this, graphinst::class.java).also{
                    startActivity(it)
                }
            }, initialDelay.toLong())
        }
    }
}