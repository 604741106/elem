package com.bm.elem.service;

import com.bm.elem.model.Amovie;

import java.util.List;

public interface AmovieService {

    List<Amovie> selectAll(int pageNum, int pageSize);
}
