package com.example.sentimedia

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.core.content.ContextCompat
import com.example.sentimedia.databinding.ActivityGraphBinding

class GraphActivity : AppCompatActivity() {
    private lateinit var binding: ActivityGraphBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityGraphBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val data = intent.getStringExtra("EXTRA_PLATFORM")?.toInt()
        binding.ivGraph.setImageDrawable(ContextCompat.getDrawable(this, R.drawable.img_4))
    }
}