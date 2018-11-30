package com.bm.elem.mapper;

import com.bm.elem.model.Amovie;

import java.util.List;

public interface AmovieMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Amovie record);

    int insertSelective(Amovie record);

    Amovie selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Amovie record);

    int updateByPrimaryKeyWithBLOBs(Amovie record);

    int updateByPrimaryKey(Amovie record);

    List<Amovie> selectAll();

}