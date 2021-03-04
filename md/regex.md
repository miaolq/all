- 正则
- means "1 or more occurrences."

{3} means "3 occurrences."

{3,} means "3 or more occurrences."

- can also be written as {1,}.

* can also be written as {0,}.

normalize={val => {
              if (/\.\d{3,}/.test(val)) {
                return (+val).toFixed(2)
              }
              return val
            }}