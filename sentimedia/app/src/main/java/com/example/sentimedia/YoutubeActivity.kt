package com.example.sentimedia

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import com.example.sentimedia.databinding.ActivityYoutubeBinding

class YoutubeActivity : AppCompatActivity() {
    private lateinit var binding: ActivityYoutubeBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityYoutubeBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val linkYT = binding.etYtLink.text.toString()
        val msg = "Please wait while we process your request..."

        val handler = Handler(Looper.getMainLooper())

        binding.btnAnalYT.setOnClickListener {
            val initialDelay = 10000
            binding.textView.text = msg
            handler.postDelayed({
                Intent(this, GraphActivity::class.java).also{
                    startActivity(it)
                }
            }, initialDelay.toLong())
        }
    }
}