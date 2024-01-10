package com.example.sentimedia

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import com.example.sentimedia.databinding.ActivityFaceBinding

class FaceActivity : AppCompatActivity() {
    private lateinit var binding : ActivityFaceBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityFaceBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val linkFace = binding.etFacebook.text.toString()
        val msg = "Please wait while we process your request..."

        val handler = Handler(Looper.getMainLooper())

        binding.btnAnalyzeFb.setOnClickListener {
            val initialDelay = 10000
            binding.textView3.text = msg
            handler.postDelayed({
                Intent(this, GraphFb::class.java).also{
                    startActivity(it)
                }
            }, initialDelay.toLong())
        }
    }
}