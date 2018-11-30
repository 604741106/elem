package com.bm.elem.service.impl;

import com.bm.elem.mapper.AmovieMapper;
import com.bm.elem.model.Amovie;
import com.bm.elem.service.AmovieService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value="AmovieService")
public class AmovieServiceImpl implements AmovieService {
    @Autowired
    AmovieMapper amovieMapper;

    @Override
    public List<Amovie> selectAll(int pageNum, int pageSize) {

        PageHelper.startPage(pageNum, pageSize);
        return amovieMapper.selectAll();
    }
}
