import React, { useEffect, useRef } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, Element } from 'react-scroll';
import './style.scss';

const Ul = React.memo((props) => {
  const { list, scrollRef, ulCls, height, onActive } = props;
  return (
    <ul key="ul-key" ref={scrollRef} className={ulCls}>
      {list.map((item) => {
        return (
          <li key={item.key}>
            <Link
              activeClass="active"
              to={item.key}
              spy
              smooth
              offset={-height}
              duration={420}
              onSetActive={onActive}
            >
              {item.value}
            </Link>
          </li>
        );
      })}
    </ul>
  );
});

export default function StickyScroll(props) {
  const { list, isFlex = true, height = 50, getSticky } = props;
  const leftArr = useRef([]);
  const scrollRef = useRef();

  const ulCls = isFlex ? 'ul-flex' : 'ul-flow';

  useEffect(() => {
    const nodes = document.querySelectorAll('.scroll-tab>ul>li');
    nodes.forEach((item) => {
      const { left, width } = item.getBoundingClientRect();
      leftArr.current.push({ left, width });
    });
  }, [list]);

  const onActive = (key) => {
    if (isFlex || !leftArr.current.length) {
      // 非滑动模式
      return;
    }
    const index = list.findIndex((item) => item.key === key);
    const { left, width } = leftArr.current[index];
    const val = (width - window.innerWidth) / 2 + left;
    scrollRef.current.scrollLeft = val;
  };

  return (
    <StickyContainer>
      <Sticky>
        {({ style, isSticky }) => {
          getSticky && getSticky(isSticky);
          return (
            <div
              className={`scroll-tab ${isSticky ? 'scroll-tab-fixed' : ''}`}
              style={{
                ...style,
                height: `${height}px`,
                lineHeight: `${height}px`,
              }}
            >
              <Ul
                list={list}
                scrollRef={scrollRef}
                ulCls={ulCls}
                height={height}
                onActive={onActive}
              />
            </div>
          );
        }}
      </Sticky>
      {list.map((item) => {
        const { key, element } = item;
        return (
          <Element key={key} name={key}>
            {element}
          </Element>
        );
      })}
    </StickyContainer>
  );
}
