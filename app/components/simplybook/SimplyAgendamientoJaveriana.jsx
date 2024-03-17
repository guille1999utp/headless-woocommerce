"use client"
import React, { useEffect } from 'react';

const SimplyAgendamientoJaveriana = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.simplybook.me/v2/widget/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleScriptLoad = () => {
      const widget = new window.SimplybookWidget({
        widget_type: 'iframe',
        url: 'https://mincaelectric.simplybook.me',
        theme: 'space',
        theme_settings: {
          timeline_hide_unavailable: '1',
          sb_base_color: '#e30613',
          hide_past_days: '0',
          timeline_show_end_time: '0',
          timeline_modern_display: 'as_slots',
          display_item_mode: 'block',
          body_bg_color: '#ffffff',
          sb_review_image: '',
          dark_font_color: '#e30613',
          light_font_color: '#ffffff',
          btn_color_1: '#e30613',
          sb_company_label_color: '#ffffff',
          hide_img_mode: '0',
          show_sidebar: '1',
          sb_busy: '#dad2ce',
          sb_available: '#d3e0f1',
        },
        timeline: 'modern_week',
        datepicker: 'top_calendar',
        is_rtl: false,
        app_config: {
          clear_session: 1,
          allow_switch_to_ada: 0,
          predefined: {
            provider: '8',
            location: '6',
          },
        },
      });
    };

    script.addEventListener('load', handleScriptLoad);

    return () => {
      script.removeEventListener('load', handleScriptLoad);
      document.body.removeChild(script);
    };
  }, []);

  return <div id="simplybook-widget"></div>;
};

export default SimplyAgendamientoJaveriana;