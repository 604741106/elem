package com.bm.elem.controller;

import com.bm.elem.service.AmovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/movie")
public class AmovieController {


    @Autowired
    AmovieService amovieService;

    @RequestMapping("/list")
    @ResponseBody
    public List list(int pageNum, int pageSize) {
        return  amovieService.selectAll(pageNum, pageSize);
    }

    @RequestMapping("/index")
    public String index(){
        return  "amovie/list";
    }
}
