package com.example.sentimedia

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.sentimedia.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnYt.setOnClickListener {
            Intent(this, YoutubeActivity::class.java).also {
                startActivity(it)
            }
        }

        binding.btTwitter.setOnClickListener {
            Intent(this, TwitterActivity::class.java).also {
                startActivity(it)
            }
        }

        binding.btInsta.setOnClickListener{
            Intent(this, InstActivity::class.java).also {
                startActivity(it)
            }
        }

        binding.btnFace.setOnClickListener{
            Intent(this, FaceActivity::class.java).also{
                startActivity(it)
            }
        }
    }
}