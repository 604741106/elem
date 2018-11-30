package com.bm.elem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
@MapperScan("com.bm.elem.mapper")
public class ElemApplication {

    public static void main(String[] args) {
        SpringApplication.run(ElemApplication.class, args);
    }
}
